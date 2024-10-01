import React, { useState, useRef, useEffect } from "react";
import {
  FormGroup,
  Input,
  Label,
  Button,
  FormContainer,
  PageContainer,
  CheckboxContainer,
  Heading,
  Paragraph,
  ErrorText,
} from '../styles/FormStyles';
import Map from './Map';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useDebounce from './useDebounce';  // Assuming we are using debouncing

const HalloweenForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    newsletter: false
  });

  const [submittedAddress, setSubmittedAddress] = useState("");
  const [errors, setErrors] = useState({});
  const addressInputRef = useRef(null);
  const [query, setQuery] = useState(''); // To track user's input in address field
  const [isApiLoaded, setApiLoaded] = useState(false);  // Track if API has been loaded

  // Debounced query to limit how often autocomplete requests are sent
  const debouncedQuery = useDebounce(query, 300); // 300 ms delay

  // Dynamically load Google Maps API only when the user focuses on the address field
  const loadGoogleMapsApi = () => {
    if (!isApiLoaded) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => {
        setApiLoaded(true);  // Mark API as loaded
        initializeAutocomplete();  // Initialize autocomplete once API is loaded
      };
    } else {
      initializeAutocomplete();  // If API is already loaded, just initialize autocomplete
    }
  };

  // Initialize Google Places Autocomplete
  const initializeAutocomplete = () => {
    if (window.google && addressInputRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(addressInputRef.current, {
        types: ["address"], // Restrict to address types
        componentRestrictions: { country: "au" }  // Restrict to Australia (for example)
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        setFormData((prevState) => ({
          ...prevState,
          address: place.formatted_address || "" // Set address based on user's selection
        }));
      });
    }
  };

  // Update query when the user types in the address field
  const handleAddressChange = (e) => {
    const { value } = e.target;
    setQuery(value);  // Update the query to trigger debounce
    setFormData((prevState) => ({
      ...prevState,
      address: value,
    }));
  };

  // Use debouncedQuery for the actual API call
  useEffect(() => {
    if (debouncedQuery) {
      initializeAutocomplete(); // Initialize autocomplete after debounced value
    }
  }, [debouncedQuery]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.address) {
      formErrors.address = "Address is required.";
    }
    if (formData.newsletter && !formData.email) {
      formErrors.email = "Email is required for newsletter subscription.";
    }
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Display success notification
        toast.success('Your information has been saved!', {
          position: "top-right",
          autoClose: 3000,  // Auto close after 3 seconds
        });
        setSubmittedAddress(formData.address);
        setErrors({});  // Clear errors upon successful submission
      } else {
        // Display error notification
        toast.error('Failed to save your information.', {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error('Error during submission:', error);
      toast.error('An unexpected error occurred. Please try again.', {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <PageContainer id="formSection">
      <FormContainer>
        <Heading>📍 Add My Address to be Visible on the Map</Heading>
        <Paragraph>Transform your house into a haunted ghoulish area this Halloween season! Craft it with spider webs, witch decorations, creepy cloths, and many more!</Paragraph>
        <Paragraph>Upon joining the Spooktacular event, our team will make sure that your house will be easily located on the map. In doing so, Trick-Or-Treat joiners will be able to knock on your door to either show off some tricks or get some treats! 🍫</Paragraph>
        <Paragraph >By adding your address to the map, you agree to the Terms & Conditions.</Paragraph>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">First name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Sarah"
              value={formData.name}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="address">Address *</Label>
            <Input
              ref={addressInputRef}  // Attach ref to the input for autocomplete
              type="text"
              id="address"
              name="address"
              placeholder="Search Address"
              value={formData.address}
              onChange={handleAddressChange}
              onFocus={loadGoogleMapsApi} // Load API only when the field is focused
              style={{ borderColor: errors.address ? 'red' : '#fff' }}  // Error style
            />
            {errors.address && <ErrorText>{errors.address}</ErrorText>}  {/* Address error */}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="name@email.com"
              value={formData.email}
              onChange={handleChange}
              style={{ borderColor: errors.email ? 'red' : '#fff' }}  // Error style
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}  {/* Email error */}
          </FormGroup>

          <CheckboxContainer>
            <Input type="checkbox" id="newsletter" name="newsletter" onChange={handleChange} />
            <Label htmlFor="newsletter">Yes, subscribe me to the newsletter.</Label>
          </CheckboxContainer>

          <Button type="submit">Add</Button>
        </form>

        {/* Render the map only if a valid address is submitted */}
        {submittedAddress && <Map address={submittedAddress} />}

        {/* ToastContainer for notifications */}
        <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
      </FormContainer>
    </PageContainer>
  );
};

export default HalloweenForm;



// import React, { useState, useRef } from "react";
// import {
//   FormGroup,
//   Input,
//   Label,
//   Button,
//   FormContainer,
//   PageContainer,
//   CheckboxContainer,
//   Heading,
//   Paragraph,
//   ErrorText,
// } from '../styles/FormStyles';
// import Map from './Map';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import useDebounce from './useDebounce';  // Assuming we are using debouncing

// const HalloweenForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     newsletter: false
//   });

//   const [submittedAddress, setSubmittedAddress] = useState("");
//   const [errors, setErrors] = useState({});
//   const addressInputRef = useRef(null);
//   const [query, setQuery] = useState(''); // To track user's input in address field
//   const [isApiLoaded, setApiLoaded] = useState(false);  // Track if API has been loaded

//   // Debounced query to limit how often autocomplete requests are sent
//   const debouncedQuery = useDebounce(query, 300); // 300 ms delay

//   // Dynamically load Google Maps API only when the user focuses on the address field
//   const loadGoogleMapsApi = () => {
//     if (!isApiLoaded) {
//       const script = document.createElement('script');
//       script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
//       script.async = true;
//       script.defer = true;
//       document.body.appendChild(script);
//       script.onload = () => {
//         setApiLoaded(true);  // Mark API as loaded
//         initializeAutocomplete();  // Initialize autocomplete once API is loaded
//       };
//     } else {
//       initializeAutocomplete();  // If API is already loaded, just initialize autocomplete
//     }
//   };

//   // Initialize Google Places Autocomplete
//   const initializeAutocomplete = () => {
//     if (window.google && addressInputRef.current) {
//       const autocomplete = new window.google.maps.places.Autocomplete(addressInputRef.current, {
//         types: ["address"], // Restrict to address types
//         componentRestrictions: { country: "au" }  // Restrict to Australia (for example)
//       });

//       autocomplete.addListener("place_changed", () => {
//         const place = autocomplete.getPlace();
//         setFormData((prevState) => ({
//           ...prevState,
//           address: place.formatted_address || "" // Set address based on user's selection
//         }));
//       });
//     }
//   };

//   // Update query when the user types in the address field
//   const handleAddressChange = (e) => {
//     const { value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       address: value,
//     }));
//     setQuery(value);  // Update the query to trigger autocomplete
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const validateForm = () => {
//     let formErrors = {};
//     if (!formData.address) {
//       formErrors.address = "Address is required.";
//     }
//     if (formData.newsletter && !formData.email) {
//       formErrors.email = "Email is required for newsletter subscription.";
//     }
//     return formErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }

//     try {
//       const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/submit`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         // Display success notification
//         toast.success('Your information has been saved!', {
//           position: "top-right",
//           autoClose: 3000,  // Auto close after 3 seconds
//         });
//         setSubmittedAddress(formData.address);
//         setErrors({});  // Clear errors upon successful submission
//       } else {
//         // Display error notification
//         toast.error('Failed to save your information.', {
//           position: "top-right",
//           autoClose: 3000,
//         });
//       }
//     } catch (error) {
//       console.error('Error during submission:', error);
//       toast.error('An unexpected error occurred. Please try again.', {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     }
//   };

//   return (
//     <PageContainer id="formSection">
//       <FormContainer>
//         <Heading>📍 Add My Address to be Visible on the Map</Heading>
//         <Paragraph>Transform your house into a haunted ghoulish area this Halloween season! Craft it with spider webs, witch decorations, creepy cloths, and many more!</Paragraph>
//         <Paragraph>Upon joining the Spooktacular event, our team will make sure that your house will be easily located on the map. Trick-Or-Treat joiners will be able to knock on your door for tricks or treats!</Paragraph>
//         <form onSubmit={handleSubmit}>
//           <FormGroup>
//             <Label htmlFor="name">First name</Label>
//             <Input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Sarah"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </FormGroup>

//           <FormGroup>
//             <Label htmlFor="address">Address *</Label>
//             <Input
//               ref={addressInputRef}  // Attach ref to the input for autocomplete
//               type="text"
//               id="address"
//               name="address"
//               placeholder="Search Address"
//               value={formData.address}
//               onChange={handleAddressChange}
//               onFocus={loadGoogleMapsApi} // Load API only when the field is focused
//               style={{ borderColor: errors.address ? 'red' : '#fff' }}  // Error style
//             />
//             {errors.address && <ErrorText>{errors.address}</ErrorText>}  {/* Address error */}
//           </FormGroup>

//           <FormGroup>
//             <Label htmlFor="email">Email</Label>
//             <Input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="name@email.com"
//               value={formData.email}
//               onChange={handleChange}
//               style={{ borderColor: errors.email ? 'red' : '#fff' }}  // Error style
//             />
//             {errors.email && <ErrorText>{errors.email}</ErrorText>}  {/* Email error */}
//           </FormGroup>

//           <CheckboxContainer>
//             <Input type="checkbox" id="newsletter" name="newsletter" onChange={handleChange} />
//             <Label htmlFor="newsletter">Yes, subscribe me to the newsletter.</Label>
//           </CheckboxContainer>

//           <Button type="submit">Add</Button>
//         </form>

//         {/* Render the map only if a valid address is submitted */}
//         {submittedAddress && <Map address={submittedAddress} />}

//         {/* ToastContainer for notifications */}
//         <ToastContainer
//         autoClose={3000}
//         hideProgressBar={false}
//         closeOnClick
//         pauseOnHover
//       />
//       </FormContainer>
//     </PageContainer>
//   );
// };

// export default HalloweenForm;

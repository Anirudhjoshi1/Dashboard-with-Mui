import { Box, Button, Grid, IconButton, MenuItem, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {collection,addDoc, getDocs , updateDoc} from "firebase/firestore"
import {db} from "../../firebase-config"
import Swal from "sweetalert2";
import { useAppStore } from '../../appStore';
import { doc } from 'firebase/firestore';

const EditProducts = ({ onClose ,fid }) => {

    const [name , setName] = useState("")
    const [price , setPrice] = useState(0)
    const [category , setCategory] = useState("")
    const setRows = useAppStore((state)=> state.setRows)
    const empCollectionRef = collection(db, "products");


    useEffect(()=>{
      console.log("Fid: " + fid.id);
      setName(fid.name);
      setPrice(fid.price)
      setCategory(fid.category)
    }, []);
    


    const handleNameChange = (e) =>{
        setName(e.target.value)
    }

    const handlePriceChange = (e) =>{
        setPrice(e.target.value)
    }

    const handleCategoryChange = (e) =>{
        setCategory(e.target.value)
    }

    const createUser = async()=>{
      const userDoc = doc(db , "products" , fid.id);
      const newFields = {
        name:name,
        price: Number(price),
        category: category,
        Date: String(new Date())
      };
      await updateDoc(userDoc,newFields);
      getUsers();
      onClose();
      Swal.fire("Submitted" , "Your File has been Submitted. ", "success")
    }


    const getUsers = async () => {
      const data = await getDocs(empCollectionRef);
      setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };


    const currencies = [
        {
          value: 'Mobile',
          label: 'Mobile',
        },
        {
          value: 'Laptop',
          label: 'Laptop',
        },
        {
          value: 'Accesories',
          label: 'Accesories',
        },
        {
          value: 'Tablets',
          label: 'Tablets',
        },
      ];
  return (
    <>
    <Box sx={{m:2}}/>
    <Typography variant='h5' align='center'>
        Edit Products
    </Typography>
    <IconButton style={{position: "absolute", top:"0" , right:"0"}} onClick={onClose}>
        <CloseIcon/>
    </IconButton>

    <Box height={30}/>
    <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField id="outlined-basic" label="Name" variant="outlined" size='small' sx={{minWidth:"100%"}} value={name} onChange={handleNameChange} />
        </Grid>

        <Grid item xs={6}>
        <TextField type='number' id="outlined-basic" label="Price" variant="outlined" size='small' sx={{minWidth:"100%"}} value={price} onChange={handlePriceChange}
         InputProps={{startAdornment:(
            <InputAdornment position="start">
              <CurrencyRupeeIcon/>
            </InputAdornment>
         ),
         }}/>
        </Grid>

        <Grid item xs={6}>
        <TextField select id="outlined-basic" label="Category" variant="outlined" size='small' sx={{minWidth:"100%"}} value={category} onChange={handleCategoryChange} >
        {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>

        <Grid item xs={12}>
        <Button variant='contained' onClick={createUser} >
            submit
        </Button>
        </Grid>

    </Grid>

    </>
  )
}

export default EditProducts
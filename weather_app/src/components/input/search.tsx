"use clinet"

import { Search } from '@mui/icons-material'
import { Button, TextField, TextFieldProps } from '@mui/material'
import { } from 'react'
import { FormValues, SearchProps } from '../../../types'
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps, getIn } from "formik";
import getWeather from '../../../utils'
import { useRouter } from 'next/navigation'


const FormTextField: React.FC<FieldProps & TextFieldProps> = props => {
    const isTouched = getIn(props.form.touched, props.field.name)
    const errorMessage = getIn(props.form.errors, props.field.name)
    
    const { error, helperText, field, form, ...rest } = props
    return (
        <TextField
            variant="outlined"
            sx={{width:{sm:"400px",xs:"360px"}}}
            error={error ?? Boolean(isTouched && errorMessage)}
            helperText={helperText ?? ((isTouched && errorMessage) ? errorMessage : undefined)}
            {...rest}
            {...field}
        />
    )
}

const SearchInput = ({setCity ,setLocation}: SearchProps) => {
    return (
        <>
            <Formik
                initialValues={{
                    city: ""
                }}

                onSubmit={async(
                    values: FormValues,
                    formikHelpers: FormikHelpers<FormValues>,
                    
                ) => {
                    
                     getWeather(values.city)
                     .then((data)=>{

                         setCity(data)
                         setLocation(data)
                         console.log(data.header);
                     })
                    .catch((err)=>alert(JSON.stringify('there is no data for the city you searched')))
                }}
            >
                {(formikProps: FormikProps<FormValues>) => (
                    <Form noValidate autoComplete="off" style={{ display: 'flex' }}>
                        <Field InputLabelProps={{ style: { fontSize: "15px", color: "#c5bebe" } }}
                            inputProps={{
                                style: {
                                    height: 13, borderBottomLeftRadius: 10, borderTopLeftRadius: 10,borderTopRightRadius: 0,borderBottomRightRadius:0,
                                    backgroundColor: "rgb(55 65 81 )", color: "white", opacity: .6, fontSize: 20
                                }
                            }}
                            component={FormTextField}
                            name="city"
                            label="search city..."
                        />
                        <Button type='submit' sx={{borderBottomRightRadius:10, borderTopRightRadius: 10,borderTopLeftRadius: 0,borderBottomLeftRadius: 0}} className='bg-white bg-opacity-50 '>
                            <Search sx={{ color: "black", fontSize: 25 }} />
                        </Button>
                    </Form>
                )}
            </Formik>

        </>
    )
}

export default SearchInput
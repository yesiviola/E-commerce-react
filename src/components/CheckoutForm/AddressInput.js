import { Grid, TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const AddressInput = ({name, label, required}) => {
    const {control} = useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <Controller
             control={control}
             name={name}
             defaultValue=""
              render={({field }) => (
              <TextField {...field} fullWidth 
          label={label} required={required} />
            )} 
            />
        </Grid>
    );
}
export default AddressInput;
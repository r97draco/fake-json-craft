import React, { useState } from 'react';
import { Button, FormControl, Paper, TextField, Select, MenuItem, InputLabel } from '@mui/material';

const Form = () => {
    const [keyValue, setKeyValue] = useState("");
    const [numberOfValues, setNumberOfValues] = useState(1);
    const [dataType, setDataType] = useState("string");
    const [jsonData, setJsonData] = useState(null);

    const handleKeyChange = (e) => setKeyValue(e.target.value);
    const handleNumberChange = (e) => setNumberOfValues(e.target.value);
    const handleDataTypeChange = (e) => setDataType(e.target.value);

    const generateRandomData = (type) => {
        switch (type) {
            case 'number':
                return Math.random();
            case 'boolean':
                return Math.random() < 0.5;
            default:
                return Math.random().toString(36).substring(2, 15);
        }
    };

    const handleSubmit = () => {
        const values = Array.from({ length: numberOfValues }, () => generateRandomData(dataType));
        const generatedJson = { [keyValue]: values };
        setJsonData(generatedJson);
        console.log(generatedJson);
    };

    const handleReset = () => {
        setKeyValue("");
        setNumberOfValues(1);
        setDataType("string");
        setJsonData(null);
    };

    return (
        <Paper style={{ padding: '20px', margin: '20px' }}>
            <h2>Form Demo</h2>
            <FormControl fullWidth margin="normal">
                <TextField
                    onChange={handleKeyChange}
                    value={keyValue}
                    label="Key"
                />
            </FormControl>
            <FormControl fullWidth margin="normal">
                <TextField
                    type="number"
                    onChange={handleNumberChange}
                    value={numberOfValues}
                    label="Number of Values"
                    InputProps={{ inputProps: { min: 1 } }}
                />
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel>Data Type</InputLabel>
                <Select
                    value={dataType}
                    label="Data Type"
                    onChange={handleDataTypeChange}
                >
                    <MenuItem value="string">String</MenuItem>
                    <MenuItem value="number">Number</MenuItem>
                    <MenuItem value="boolean">Boolean</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
                <Button variant="outlined" color="secondary" onClick={handleReset}>
                    Reset
                </Button>
            </FormControl>
            {jsonData && <pre>{JSON.stringify(jsonData, null, 2)}</pre>}
        </Paper>
    );
};

export default Form;

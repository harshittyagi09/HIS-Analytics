import { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const labelMapping: any = {
    resetPswrd: 'Location',
    doctorTypes: 'Doctor Type',
    depts: 'Department',
};

export const Dropdown = (props: any) => {
    const { dropdown, options, initialySelected } = props;
    const [selectedVal, setSelectedVal] = useState('');

    useEffect(() => {
        if (props.dropdown === 'homeFilter') {
            setSelectedVal(initialySelected);
        }
    }, [props.dropdown]);

    const handleChange = (e: any) => {
        const selectedValue = e.target.value;
        setSelectedVal(selectedValue);

        if (props.dropdown === 'homeFilter') {
            props.handleFiltersChange(e);
        }
    };

    return (
        <FormControl style={{ border: '1px solid transparent' }}
            sx={{
                minWidth: 120,
                backgroundColor: 'white',
                color: 'white',
                margin: '0px',
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'transparent',
                        borderBottom: '1px solid grey',
                        padding: '5.5px 14px',
                        borderRadius: '0px'
                    },
                    '&:hover fieldset': {
                        borderColor: 'transparent',
                        borderBottom: '1px solid grey'
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'transparent',
                        borderBottom: '1px solid grey'
                    },
                },
                '& .MuiFormLabel-root': {
                    fontSize: '13px',
                    // transform: 'translate(14px, 12px) scale(1)',
                    '&.Mui-focused': {
                        color: 'grey',
                        borderColor: 'transparent'
                    },
                },
                '& .css-1mlvn36-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
                    fontSize: '13px'
                },
                '& .css-1ndz14u-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused.MuiOutlinedInput-notchedOutline': {
                    borderColor: 'transparent !important'
                }
            }}
            size="small"
        >
            {/* <InputLabel required id="demo-select-small-label">
                {labelMapping[dropdown] || 'Select'}
            </InputLabel> */}
            <Select
                sx={{
                    '& .css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
                        padding: '5px',
                        fontSize: '13px',
                        textAlign: 'center',
                    },
                }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                label={labelMapping[dropdown] || 'Select'}
                value={selectedVal}
                onChange={handleChange}
                MenuProps={{
                    PaperProps: {
                        style: {
                            maxHeight: 48 * 4.5 + 8,
                        }
                    }
                }}
            >
                {options?.map((data: any, index: number) => (
                    dropdown === 'homeFilter' && <MenuItem sx={{ fontSize: '13px' }} key={index} value={data}>{data}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
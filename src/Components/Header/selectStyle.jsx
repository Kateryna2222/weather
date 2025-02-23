export const colourStyles = {
    control: (styles) => ({ 
        ...styles,
        backgroundColor: 'var(--cart-background-default)',
        borderRadius: '10px',
        fontSize: '16px',
        border: 'none',
        width: '194px',
        height: '37px',
    }),
    input: (styles) => ({
        ...styles, 
        color: 'var(--text-color-default)',
    }),
    singleValue: (styles) => ({
        ...styles, 
        color: 'var(--text-color-default)',
    }),
    option: (styles, { isSelected, isFocused }) => ({
        ...styles,
        backgroundColor: isSelected
            ? '#4793FF' 
            : isFocused
            ? '#92baf2' 
            : 'var(--cart-background-default)',
    }),
}
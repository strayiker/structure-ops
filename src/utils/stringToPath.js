export default string => string.match(/[^[.[|\]]+/g) || [];

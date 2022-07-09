export default function formatDate(dateString) {
    const [M, D, Y] = dateString.split('/');
    return {
        format: (formatString) => {
            switch (formatString) {
                case 'd/m/y':
                    return `${D}/${M}/${Y}`;
                case 'm/d/y':
                    return `${M}/${D}/${Y}`;
                default:
                    return '';
            }
        },
    };
}

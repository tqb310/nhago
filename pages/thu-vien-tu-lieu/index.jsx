import { referenceThumbnails } from 'constants/media';
import Grid from 'components/common/Grid';

const AllReferences = () => {
    return (
        <Grid
            data={referenceThumbnails}
            columnist='thu-vien-tu-lieu'
            title='Thư viện tư liệu'
        />
    );
};

export default AllReferences;

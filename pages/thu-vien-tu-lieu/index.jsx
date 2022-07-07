import { referenceMediaFiles } from 'constants/media';
import Grid from 'components/common/Grid';

const AllReferences = () => {
    return (
        <Grid
            data={referenceMediaFiles}
            columnist='thu-vien-tu-lieu'
            title='Thư viện tư liệu'
        />
    );
};

export default AllReferences;

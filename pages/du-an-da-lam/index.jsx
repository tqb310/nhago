import { projectMediaFiles } from 'constants/media';
import Grid from 'components/common/Grid';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faListSquares, faBars } from '@fortawesome/free-solid-svg-icons';

const AllProjects = () => {
    return (
        <Grid
            data={projectMediaFiles}
            columnist='du-an-da-lam'
            title='Các dự án đã làm'
        />
    );
};

export default AllProjects;

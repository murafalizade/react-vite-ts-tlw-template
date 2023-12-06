import withAuth from '../hocs/withAuth';
import '../styles/tailwind.css';

// eslint-disable-next-line react-refresh/only-export-components
function Profile() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            {/* Edit the page   */}
        </div>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default withAuth(Profile);

import loadingIcon from '../../images/loading.webp'

const Loading = () => {
    return (
        <div className="loading">
            <span>Loading </span>
            <img src={loadingIcon} alt="..." />
        </div>
    );
};

export default Loading;
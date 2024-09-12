const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="spinner">
        <span className="dot dot-1">🔴</span>
        <span className="dot dot-2">🟣</span>
        <span className="dot dot-3">🟠</span>
        <span className="dot dot-4">🟢</span>
        <span className="dot dot-5">🔵</span>
      </div>
      <h1 className="loading-text">Loading...</h1>
    </div>
  );
};
export default Loading;

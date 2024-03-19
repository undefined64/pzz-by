const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="mb-3">404. Страница не найдена</p>
      <p>
        <a href="/" className="px-3 py-2 bg-lightgray">
          Вернуться на главную
        </a>
      </p>
    </div>
  );
};

export default Error;

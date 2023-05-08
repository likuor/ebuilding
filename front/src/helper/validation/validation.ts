const validEmail = (email: string) => {
  // regular expression for email validation
  if (email.length === 0) {
    return {
      status: false,
      message: 'Required',
    };
  }

  // refer: https://qiita.com/sakuro/items/1eaa307609ceaaf51123
  const pattern = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  if (!pattern.test(email)) {
    return {
      status: false,
      message: 'incorrect',
    };
  }

  return {
    status: true,
    message: '',
  };
};

export { validEmail };
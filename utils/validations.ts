export const validate = (type: string, value: string) => {
  switch (type) {
    case "name":
      return persianRegext.test(value) ? "" : "مقدار وارد شده باید فارسی باشد";
    case "lastName":
      return persianRegext.test(value) ? "" : "مقدار وارد شده باید فارسی باشد";
    case "mobile":
      return mobileRegext.test(value) ? "" : "مقدار وارد شده درست نیست";
    case "password":
      return passwordRegex.test(value)
        ? ""
        : "رمز عبود باید شامل حروف کوچک و بزرگ و عدد باشد و طول آن بین 4 تا 8 کاراکتر باشد ";

    default:
      break;
  }
};

const persianRegext = /^[\u0600-\u06FF\s]+$/;
const mobileRegext = /^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,8}$/;

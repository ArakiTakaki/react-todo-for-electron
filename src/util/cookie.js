import Cookies from 'js-cookie';

const actions = {
  setCookie: (name, value) => {
    Cookies.set(name, value);
  },
  getCookie: (name) => {
    return Cookies.getJSON(name);
  }
}
export default actions
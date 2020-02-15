import Ajax from './ajax';

const Request = {
  User: {
    info(){
		console.log("xxxyyy");
      return Ajax.get('/account/info');
    }
  },
  Dict: {
    get(){
      return Ajax.get(`/dict`);
    },
  },
  Home: {
    getMessageList() {
      return Ajax.get(`/home/messages`);
    }
  },
  Login: {
    login(param){
      return Ajax.postJson("/login", param);
    },
    logout(param){
      return Ajax.post("/logout", param);
    }
  }
};

export default Request;


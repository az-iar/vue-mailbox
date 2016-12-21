Vue.use(VueResource);

new Vue({
    el: '#mailbox',
    data: {
        mails: [],
        current: null
    },
    methods: {
        getMails() {
            this.$http.get('./data/mails.json').then((response) => {
                response.json().then(res => {
                    this.mails = res.data;
                });
            }).catch(error => console.log(JSON.stringify(error)));
        },
        showMail(mail){
            this.current = mail;
        }
    },
    mounted(){
        this.getMails();
    }
});
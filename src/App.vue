<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div id="mailbox">
                        <h2>MailBox</h2>
                        <div class="row">
                            <div class="col-md-4">
                                <ul class="list-group">
                                    <li v-if="mails.length == 0" class="list-group-item">No email</li>
                                    <li v-for="mail of mails" class="list-group-item">
                                        <a href="#" @click.prevent="showMail(mail)">{{ mail.subject }}</a>
                                        <br>
                                        <small>{{ mail.date }}</small>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-8">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                        <div v-if="current">
                                            <p><strong>From: </strong>{{ current.from }}</p>
                                            <p><strong>Date: </strong>{{ current.date }}</p>
                                            <p><strong>Subject: </strong>{{ current.subject }}</p>
                                            <p><strong>Message: </strong><br>{{ current.body }}</p>
                                        </div>
                                        <div v-else>Select mail to read</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        mails: [],
        current: null
      }
    },
    methods: {
      getMails () {
        this.$http.get('/static/data/mails.json').then((response) => {
          response.json().then(res => {
            this.mails = res.data
          })
        }).catch(error => console.log(JSON.stringify(error)))
      },
      showMail (mail) {
        this.current = mail
      }
    },
    mounted () {
      this.getMails()
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

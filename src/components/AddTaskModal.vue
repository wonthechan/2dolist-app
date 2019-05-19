<template>
<modal name="add-task" transition="pop-out" :width="modalWidth" :height="650" @before-open="beforeOpen" @before-close="beforeClose">
  <div class="box">

      <div class="partition" id="partition-register">
        <div class="partition-title">New Todo</div>
        <div class="partition-form">

          <div class="autocomplete-fix">
            <input type="password">
          </div>

          <input id="n-title" type="text" v-model="title" name="title" placeholder="Title">
          <input id="n-desc" type="text" v-model="desc" placeholder="Description">

          <div style="margin-top: 20px" />

          <label class="element-title">Set Priority</label>
          <div class="radio-btn-group">
            <div class="radio">
              <input type="radio" name="radio" value="low" id="low" v-model="priority">
              <label for="low">LOW</label>
            </div>
            <div class="radio">
              <input type="radio" name="radio" value="normal" checked="checked" id="normal" v-model="priority">
              <label for="normal">NORMAL</label>
            </div>
            <div class="radio">
              <input type="radio" name="radio" value="high" id="high" v-model="priority">
              <label for="high">HIGH</label>
            </div>
          </div>

          <label class="element-title">Set Due Date</label>
          <div class="pick-date-area">
            <datepicker placeholder="Select Date" v-model="myDate"></datepicker>
          </div>

          <div style="margin-top: 20px" />

          <button class="large-btn add-btn" @click="isEmpty(title, desc, priority, myDate)">Add New <span>Todo</span></button>

          <button class="large-btn cancel-btn" @click="$modal.hide('add-task');">Cancel</button>
        </div>
      </div>

  </div>
</modal>
</template>
<script>
import moment from 'moment';
import uuid from 'uuid';
import Datepicker from 'vuejs-datepicker';
const MODAL_WIDTH = 656
export default {
  name: 'AddTaskModal',
  components: {
    Datepicker,
  },
  data () {
    return {
      modalWidth: MODAL_WIDTH,
      title: '',
      desc: '',
      priority: '',
      myDate: null,
    }
  },
  methods: {
    beforeClose () {
      // initialize
      this.title = '';
      this.desc = '';
      this.priority = '';
      this.myDate = null;
    },
    isEmpty(title, desc, priority, myDate) {
      if(title == '' || desc == '' || priority == ''){
        alert('Please fill in all the fields')
      } else{
        const newTodo = {
          uid: uuid.v4(),
          title: title,
          desc: desc,
          completed: false,
          priority: priority,
          myDate: (myDate == null) ? myDate : moment(myDate, 'YYYY-MM-DD').format('D MMM YYYY'),
          overDue: false,
        }
        this.$modal.hide('add-task');
        this.$emit('fechar', newTodo);
      }
    }
  },
  created () {
    this.modalWidth = window.innerWidth < MODAL_WIDTH
      ? MODAL_WIDTH / 2
      : MODAL_WIDTH
  }
}
</script>
<style lang="scss">
$background_color: #404142;

.element-title {
  font-size: 15px;
}
.large-btn {
  width: 100%;
  background: white;
  span {
    font-weight: 600;
  }
  &:hover {
    color: white !important;
  }
  margin-top: 150px;
}

.radio-btn-group {
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  .radio {
    margin: 0 2.4rem;
    
    label {
      font-size: 10px;
      font-family: "Open Sans", sans-serif;
      background: #fff;
      border: 1px solid #ddd;
      padding: 7px 50px;
      border-radius: 5px;
      cursor: pointer;
      transition: box-shadow 400ms ease;
      
      &:hover {
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
      }
    }
    
    input[type="radio"] {
      display: none;
    }
    
    input[type="radio"]:checked+label[for="low"] {
      background: #45ad58;
      color: #fff;
      border-color: #45ad58;
    }

    input[type="radio"]:checked+label[for="normal"] {
      background: #2196F3;
      color: #fff;
      border-color: #2196F3;
    }

    input[type="radio"]:checked+label[for="high"] {
      background: #f44248;
      color: #fff;
      border-color: #f44248;
    }
  }
}

.pick-date-area {
  font-size: 15px;
  margin-top: 10px;
}
.priority-select-set span{
  box-sizing: border-box;
  padding: 30px;
  width: 100%;
  text-align: center;
  letter-spacing: 1px;
  font-size: 20px;
  font-weight: 300;
}
.box {
  background: white;
  overflow: hidden;
  width: 656px;
  height: 650px;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 0 40px black;
  color: #8b8c8d;
  font-size: 0;

  .partition {
    width: 100%;
    height: 100%;
    .partition-title {
      box-sizing: border-box;
      padding: 30px;
      width: 100%;
      text-align: center;
      letter-spacing: 1px;
      font-size: 25px;
      font-weight: 300;
    }
    .partition-form {
      padding: 0 20px;
      box-sizing: border-box;
    }
  }
  input[type=password],
  input[type=text] {
    display: block;
    box-sizing: border-box;
    margin-bottom: 4px;
    width: 100%;
    font-size: 12px;
    line-height: 2;
    border: 0;
    border-bottom: 1px solid #DDDEDF;
    padding: 4px 8px;
    font-family: inherit;
    transition: 0.5s all;
    outline: none;
  }

  button {
    background: white;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    letter-spacing: 1px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    min-width: 140px;
    margin-top: 8px;
    color: #8b8c8d;
    cursor: pointer;
    border: 1px solid #DDDEDF;
    text-transform: uppercase;
    transition: 0.1s all;
    font-size: 10px;
    outline: none;
    &:hover {
      border-color: mix(#DDDEDF, black, 90%);
      color: mix(#8b8c8d, black, 80%);
    }
  }

.add-btn {
  margin-top: 210px;
  border-color: #4286f4;
  color: #4286f4;
  &:hover {
    border-color: #4286f4;
    background: #4286f4;
    }
  }

.cancel-btn {
margin-top: 10px;
border-color: #a8a8a8;
color: #a8a8a8;
&:hover {
  border-color: #a8a8a8;
  background: #565656;
  }
}

  .autocomplete-fix {
    position: absolute;
    visibility: hidden;
    overflow: hidden;
    opacity: 0;
    width: 0;
    height: 0;
    left: 0;
    top: 0;
  }
}
.pop-out-enter-active,
.pop-out-leave-active {
  transition: all 0.5s;
}
.pop-out-enter,
.pop-out-leave-active {
  opacity: 0;
  transform: translateY(24px);
}
</style>
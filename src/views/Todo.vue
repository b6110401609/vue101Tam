<template>
  <div>
      <h1>Todo List</h1>
      <div v-if="user">
      <label>New Todo:</label>
      <input type="text" v-model="new_todo.name">
      <label>Priority</label>
      <input type="number" min="0" max="3" v-model="new_todo.priority">
      <button class="btn btn-primary" @click="addTodo()">Add</button>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>Todo name</th>
          <th>Completed?</th>
          <th>Priority</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>
            {{ todo.name }}
            <button v-if="todo.completed && user" @click="deleteTodo(todo)" class="btn btn-danger">
              Delete
            </button>
          </td>
          <td>
            {{ todo.completed }}
            <button v-if="!todo.completed && user" @click="finishTodo(todo)">
              Finish
            </button>
          </td>
          <td>{{ todo.priority }}</td>
          <td v-if="!todo.completed">
            Created At: {{ new Date(todo.createdAt.seconds * 1000) }}
          </td>
          <td v-else>
            Completed At: {{ new Date(todo.completedAt.seconds * 1000) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { todosCollection } from '../firebase'
import {mapState} from 'vuex'

export default {
  data() {
    return {
      todos: [],
      new_todo: {
        name: '',
        priority: 0
      }
    }
  },
  computed: {
    ...mapState('account', ['user'])
  },
  firestore() {
    return {
      todos: todosCollection.orderBy('priority', 'desc')
    }
  },
  methods: {
    addTodo() {
      if (this.new_todo.name != '') {
        todosCollection.add({
          name: this.new_todo.name,
          priority: parseInt(this.new_todo.priority),
          completed: false,
          createdAt: new Date()
        })
      }
      this.new_todo = {
        name: '',
        priority: 0
      }
    },

    finishTodo(todo) {
      // asynchronous language / non-blocking io
      todo.completed = true
      todo.completedAt = new Date()
      todosCollection.doc(todo.id).update( { ...todo } )
    },

    deleteTodo(todo) {
      todosCollection.doc(todo.id).delete()
    }
  }
}
</script>

<style>

</style>
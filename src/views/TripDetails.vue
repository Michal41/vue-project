<template>
<div class="container-fluid">
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav> -->


<div class="previewSection row">
.
<div class="col-md-12">
<div class="jumbotron bg-grey">
  <h1 class="display-4">Rzym</h1>
  <p class="lead">Do twojej podrózy pozostalo <span>16 dni</span></p>
</div></div></div>
<div class="row">
  <div class="col-md-3">
        <custom-button label="Dodaj fragment podróży" @handle-click="openModal" backgroundColor="grey" />
  </div>

        <custom-modal :show-modal="modalOpen" @close-modal="closeModal" title="Dodaj fragment podróży">
          <add-transport-form @refresh-trips="refreshTrips" />
        </custom-modal>

</div>
<div class="row">
  <div class="col-md-12 p-2">
<table class="table table-dark table-stylized" >
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Transport</th>
      <th scope="col">Data odjazdu</th>
      <th scope="col">Miejsce odjazdu</th>
      <th scope="col">Data przyjazdu</th>
      <th scope="col">Miejsce przyjazdu</th>
      <th scope="col">Notatki</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody v-for="({ id, place }) in [{id: '1', place: 'Miejsce 1'}, {id: '2', place: 'Miejsce 2'}]" v-bind:key="id">
    <tr>
      <th scope="row">{{ id }}</th>
      <td>{{ place }}</td>
      <td>Otto</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>Mark</td>
      <td>Otto</td>
      <td><table-buttons id="{{id}}"></table-buttons></td>

    </tr>
  </tbody>
</table>
</div>
</div>
<div class="listSectionContainer row">
  Lista todo i lista co zabrac
</div>
</div>
</template>

<script>
import { ref } from 'vue'


import CustomButton from '@/components/CustomButton.vue'
import TableButtons from '@/components/TableButtons.vue'
import AddTransportForm from '@/components/AddTransportForm.vue'
import CustomModal from '@/components/CustomModal.vue'

const modalOpen = ref(false)


export default {
  components: {
    CustomButton,
    TableButtons,
    CustomModal,
    AddTransportForm,
    
},
  methods: {
       closeModal: function() {
      modalOpen.value = false;
    },
    openModal: function() {
      modalOpen.value = true;
    },
    refreshTrips: function() {
      modalOpen.value = false;
},
  },
  data: function () {
    return {
              modalOpen: modalOpen,

    }
  },
  async mounted() {
  }
}

</script>

<style>
  .previewSection {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(#E1DDFE 0%,#FEC8FC 30%, #FFEDE4 100%);
  }
  .listSectionContainer {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(#FFEDE4 0%,#FEC8FC 30%, #E1DDFE 100%);
  }
  .container-fluid > .row {
    background-color: #FFEDE4;
  }
.jumbotron {
  background-color: #ccaaccaa;
  margin: 2em;
  padding: 2em;
  border-radius: 38px;

}
table.table-stylized {
      background-color: #ccaaccaa ;
border-radius: 30px;
border: none;
border-collapse: initial;
}
table.table-stylized  td, table.table-stylized th {
    background-color: #aaaaaaaa ;
        font-weight: 300;

}
table.table-stylized tbody tr {
border: none;

}

table.table-stylized tbody th {
    font-weight: 400;
}
table.table-stylized thead tr th {
    background: transparent;
    font-weight: 400;
}
table.table-stylized thead tr  {
    background: #444;
}

table.table-stylized tbody tr:nth-child(even) {
    background: #444;
}
table.table-stylized tbody tr:nth-child(odd) {
    background: #bbb;
}
table .row .col-6 {
  padding-right: 0px ;
  padding-left: 0px ;
}

table {
  /* -moz-border-radius: 5px !important; */
  border-collapse: collapse !important;
  border: none !important;
}
table th,
table td {
  border: none !important
}
table thead th:first-child {
  border-radius: 10px 0 0 0 !important;
}
table thead th:last-child {
  border-radius: 0 10px 0 0 !important;
}
table tr:last-child td:first-child {
  border-radius: 0 0 0 10px !important;
}
table tr:last-child td:last-child {
  border-radius: 0 0 10px 0 !important;
}
table tr:hover td {
  background-color: #ddd !important
}
</style>
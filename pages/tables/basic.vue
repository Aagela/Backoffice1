<script>


// import { ref } from "vue";
// import supabase.js from plugins/supabase.client.js;

/**
 * Basic table component
 */

export default {
head() {
        return {
            title: `${this.title}`
        };
    },
    data() {
        return {
            locations: [],
            title: "Customer table",
            items: [{
                    text: "Tables"
                },
                {
                    text: "Bootstrap Basic",
                    active: true
                }
            ]
        };
    },
    middleware: "authentication",
    async beforeMount() {
    await this.getstations()
    await this.addCustomerRow()
  },
  mounted() {},
  methods: {
    async getstations(){
           const data = await this.$supabase.from('ChargingStation').select("*");
            if(data.error){
              console.log("no data");
              return 0
            }
            console.log(data.data);
            this.locations =  data.data
    },

    //adding data to supabase from user
    async addCustomerRow(){
        const { data, error } = await this.$supabase.from('customers')
  .insert([
    { some_column: 'someValue', other_column: 'otherValue' },
  ])
    }
  },
// name: "create",
//   data() {
//     return { title: "Bootstrap Basic",
//             items: [{
//                     text: "Tables"
//                 },
//                 {
//                     text: "Bootstrap Basic",
//                     active: true
//                 }
//             ],
//     }


            
//             customerName,
//             customerAddress
// // Create data
//     const customerName = ref("");
//     const customerAddress = ref("customer-address");
//     const statusMsg = ref(null);
//     const errorMsg = ref(null);

//      // Create customer
//     const createCustomer = async () => {
//       try {
//         const { error } = await this.$supabase.from("customers").insert([
//           {
//             customerName: customerName.value,
//             customerAddress: customerAddress.value,
//           },
//         ]);
//         if (error) throw error;
//         statusMsg.value = "Succes: Customer Created!";
//         customerName.value = null;
//         customerAddress.value = "customer-address";
//         setTimeout(() => {
//           statusMsg.value = false;
//         }, 5000);
//       } catch (error) {
//         errorMsg.value = `Error: ${error.message}`;
//         setTimeout(() => {
//           errorMsg.value = false;
//         }, 5000);
//       }
//     };

    //  return {
    //   customerName,
    //   customerAddress
    //   }
   
                                                     // INCLUDE CHARGING RECORDS IN TABLE CONTENTS INSTEAD, MAYBE.

/**************** */

    

    // head() {
    //     return {
    //         title: `${this.title}`
    //     };
    // },
    // data() {
    //     return {
    //         title: "Bootstrap Basic",
    //         items: [{
    //                 text: "Tables"
    //             },
    //             {
    //                 text: "Bootstrap Basic",
    //                 active: true
    //             }
    //         ]


            
    //         customerName,
    //         customerAddress
      
    //     };
    // },
    
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
         <v-card class="" height="100%">
      <v-list>
        <v-list-item-group mandatory color="indigo">
          <v-list-item v-for="(item, i) in locations" :key="i">
            <v-list-item-icon>
              <v-icon>{{item.status ? 'mdi-domain': 'mdi-message-text'}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
              <v-list-item-title v-text="item.address.summaryline"></v-list-item-title>
              <v-list-item-title v-text="item.Description"></v-list-item-title>
              <v-list-item-title v-text="item.status"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Staff in nearby Stations</h4>
                    <p class="card-title-desc">
                        <!-- For basic styling—light padding and only horizontal dividers—add
                        the base class <code>.table</code> to any
                        <code>&lt;table&gt;</code>. -->
                        For contact purposes
                    </p>

                    <div class="table-responsive">
                        <table class="table mb-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mto</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    <div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Stations in Birmingham</h4>
                    <p class="card-title-desc">
                        <!-- You can also invert the colors—with light text on dark
                        backgrounds—with <code>.table-dark</code>. -->
                        You may view the following stations
                    </p>

                    <div class="table-responsive">
                        <table class="table table-dark mb-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->

    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Stations in Sandringham</h4>
                    <p class="card-title-desc">
                        <!-- Use one of two modifier classes to make
                        <code>&lt;thead&gt;</code>s appear light or dark gray. -->
                    </p>

                    <div class="table-responsive">
                        <table class="table mb-0">
                            <thead class="thead-light">
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Cardi</td>
                                    <td>Khaled</td>
                                    <td>@cardi</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="row"> 
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title"> </h4>
                    <p class="card-title-desc">
                        <!-- Use <code>.table-striped</code> to add zebra-striping to any table
                        row within the <code>&lt;tbody&gt;</code>. -->
                    </p>

                    
                    <div >
                    <!-- class="p-8 flex items-start bg-light-grey rounded-md shadow-lg"> -->
                    <!-- Form -->
                    <form @submit.prevent="createCustomer" class="flex flex-col gap-y-5 w-full">
                    <h4 class="text-2xl text-at-light-green">Save Customer</h4> 


                                <!-- Customer Name -->
                    <div class="flex flex-col">
                    <label class="mb-1 text-sm text-at-light-green"
                        >Customer Name</label>
                    <input
                        type="text"
                        required
                          
                        v-model="customerName"
                    />
                    </div>

                    <!-- Customer Address  class="p-2 text-gray-500 focus:outline-none"-->
                    <div class="flex flex-col">
                    <label class="mb-1 text-sm text-at-light-green"
                        >Customer Address</label>
                    <select
                        id="customer-address"
                            
                            required
                            @change="customerChange"
                            v-model="customerAddress"
                        >
                            <option value="select-address">Select Address</option>
                            <option value="road">Midway</option>
                            <option value="avenue">Upperhead</option>
                        </select>
                        </div>

                        <button
                        type="submit"
                        class="mt-6 py-2 px-6 rounded-sm self-start text-sm
                            text-black bg-at-light-green duration-200 border-solid
                            border-2 border-transparent hover:border-at-light-green hover:bg-white
                            hover:text-at-light-green">
                        Record Customer
                        </button>
                     </form>
                    </div>  
                  </div>

                </div>
            </div>
        </div> </div>
    </div>
    <!-- end row -->

    <!-- <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Bordered table</h4>
                    <p class="card-title-desc">
                        Add <code>.table-bordered</code> for borders on all sides of the
                        table and cells.
                    </p>

                    <div class="table-responsive">
                        <table class="table table-bordered mb-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Borderless table</h4>
                    <p class="card-title-desc">
                        Add <code>.table-borderless</code> for a table without borders.
                    </p>

                    <div class="table-responsive">
                        <table class="table table-borderless mb-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div> -->
    <!-- </div> -->
    <!-- end row -->

    <!-- <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Hoverable rows</h4>
                    <p class="card-title-desc">
                        Add <code>.table-hover</code> to enable a hover state on table
                        rows within a <code>&lt;tbody&gt;</code>.
                    </p> -->

                    <!-- <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> -->



<!-- 
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Small table</h4>
                    <p class="card-title-desc">
                        Add <code>.table-sm</code> to make tables more compact by cutting
                        cell padding in half.
                    </p>

                    <div class="table-responsive">
                        <table class="table table-sm m-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!-- end row -->

    <!-- <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Contextual classes</h4>
                    <p class="card-title-desc">
                        Use contextual classes to color table rows or individual cells.
                    </p>

                    <div class="table-responsive">
                        <table class="table mb-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Column heading</th>
                                    <th>Column heading</th>
                                    <th>Column heading</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-light">
                                    <th scope="row">1</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>

                                <tr class="table-success">
                                    <th scope="row">2</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>

                                <tr class="table-info">
                                    <th scope="row">3</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>

                                <tr class="table-warning">
                                    <th scope="row">4</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>

                                <tr class="table-danger">
                                    <th scope="row">5</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div> -->

        <!-- <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Captions</h4>
                    <p class="card-title-desc">
                        A <code>&lt;caption&gt;</code> functions like a heading for a
                        table. It helps users with screen readers to find a table and
                        understand what its about and decide if they want to read it.
                    </p>

                    <div class="table-responsive">
                        <table class="table mb-0">
                            <caption>
                                List of users
                            </caption>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div> -->
    <!-- </div> -->
    <!-- end row -->

    <!-- <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Responsive tables</h4>
                    <p class="card-title-desc">
                        Create responsive tables by wrapping any <code>.table</code> in
                        <code>.table-responsive</code>
                        to make them scroll horizontally on small devices (under 768px).
                    </p>

                    <div class="table-responsive">
                        <table class="table mb-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!-- end row -->
</div>
</template>

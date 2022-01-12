<template>
  <div class="app-table-demo">
    <app-table
    :headers="table.headers"
    :hasCaption="true"
    :caption="table.caption"
    :rows="rows.length"
    >
        <tr
        v-for="(item, index) in rows"
        :key="index"
        >
            <th scope="row">{{item.id}}</th>
            <td>{{item.name}}</td>
            <td>{{item.lastName}}</td>
            <td>{{item.seassons}}</td>
            <td>{{item.team}}</td>
            <td>{{item.points}}</td>
            <td>{{item.rebounds}}</td>
            <td>{{item.steals}}</td>
            <td>{{item.assistances}}</td>
            <td>{{item.rings}}</td>
            <td
            v-for="action in actions"
            :key="action.label"
            @click="action.action(item)"
            >{{action.label}}</td>
        </tr>
    </app-table>
    <div class="action-output mt-6">
        <div
        class="mb-3"
        v-if="actionOutput.actionType"
        >
            Tipo de acción: <br/>
            <span>{{actionOutput.actionType}}</span>
        </div>
        <div
        class="mb-3"
        v-if="actionOutput.actionDescription"
        >
            Elemento sobre el que actúa: <br/>
            <span>{{actionOutput.actionDescription}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import AppTable from '../AppTable.vue'
export default {
  components: { AppTable },
    name: 'app-table-demo',
    data(){
        return{
            table:{
                caption: 'Estadísticas NBA',
                headers: [
                    'Id',
                    'Nombre',
                    'Apellido',
                    'Temporadas',
                    'Equipo',
                    'Puntos',
                    'Rebotes',
                    'Robos',
                    'Asistencias',
                    'Anillos'
                ]
            },
            rows:[
                {
                    id: 21,
                    name: 'Larry',
                    lastName: 'Bird',
                    seassons: '78/89',
                    team: 'Boston Celtics',
                    points: 27,
                    rebounds: 7.5,
                    steals: 4,
                    assistances: 4.7,
                    rings: 3
                },
                {
                    id: 54,
                    name: 'Michael',
                    lastName: 'Jordan',
                    seassons: '85/97',
                    team: 'Chicago Bulls',
                    points: 32.4,
                    rebounds: 6.9,
                    steals: 6.4,
                    assistances: 7,
                    rings: 6
                },
                {
                    id: 14,
                    name: 'Magic',
                    lastName: 'Jonshon',
                    seassons: '79/89',
                    team: 'L.A Lakers',
                    points: 18,
                    rebounds: 4.2,
                    steals: 6.4,
                    assistances: 14,
                    rings: 3
                },
                
            ],
            actions: [
                {
                    action: this.delete,
                    label: 'acción borrar'
                },
                {
                    action: this.add,
                    label: 'acción añadir'
                }
            ],
            actionOutput: {
                actionType: '',
                actionDescription: ''
            }
        }
    },
    methods:{
        delete(item){
            console.log('acción disparada borrar', item)
            this.actionOutput.actionType = 'Borrar elemento'
            this.actionOutput.actionDescription = JSON.stringify(item)
        },
        add(item){
            console.log('acción disparada añadir', item)
            this.actionOutput.actionType = 'Añadir elemento'
            this.actionOutput.actionDescription = ''
        }
    }
}
</script>

<style>

</style>
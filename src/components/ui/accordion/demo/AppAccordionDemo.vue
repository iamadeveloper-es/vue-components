<template>
  <div class="app-accordion-demo">
      <app-accordion
      v-for="(data, index) in acordionData"
      :key="index"
      :title="data.title"
      >
        <p
        v-for="item in data.items"
        :key="item.id"
        >{{item.text}}</p>
      </app-accordion>
  </div>
</template>

<script>
import AppAccordion from '../AppAccordion.vue'
export default {
    name: 'app-accordion-demo',
    components:{
        AppAccordion
    },
    data(){
        return{
            acordionData: [
                {
                    title: 'Section 1',
                    items: [
                        {
                            id: 1,
                            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem cupiditate, porro aliquid fuga minus nam accusantium commodi obcaecati tempore tempora harum voluptatum assumenda numquam sunt omnis dolorum et non?'
                        },
                        {
                            id: 2,
                            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem cupiditate, porro aliquid fuga minus nam accusantium commodi obcaecati tempore tempora harum voluptatum assumenda numquam sunt omnis dolorum et non?'
                        }
                    ]
                },
                {
                    title: 'Section 2',
                    items: [
                        {
                            id: 3,
                            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem cupiditate, porro aliquid fuga minus nam accusantium commodi obcaecati tempore tempora harum voluptatum assumenda numquam sunt omnis dolorum et non?'
                        },
                        {
                            id: 4,
                            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem cupiditate, porro aliquid fuga minus nam accusantium commodi obcaecati tempore tempora harum voluptatum assumenda numquam sunt omnis dolorum et non?'
                        }
                    ]
                },
                {
                    title: 'Section 2',
                    items: [
                        {
                            id: 5,
                            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem cupiditate, porro aliquid fuga minus nam accusantium commodi obcaecati tempore tempora harum voluptatum assumenda numquam sunt omnis dolorum et non?'
                        },
                        {
                            id: 6,
                            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem cupiditate, porro aliquid fuga minus nam accusantium commodi obcaecati tempore tempora harum voluptatum assumenda numquam sunt omnis dolorum et non?'
                        }
                    ]
                }
            ]
        }
    }
}
</script>
<style>

</style>
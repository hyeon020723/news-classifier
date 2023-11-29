<template>
  <div>
    <ProcedureBox />
    <div class="contentsBox">
      <div>
        <div v-if="cartItems.length === 0" class="dropdownBox">
          <div class="dropdownTitle">뉴스를 담아주세요</div>
        </div>

        <div v-else>
          <img
            src="@/assets/musma_pick.png"
            alt="Musma Pick Image"
            id="musmaspickImg" />
          <div
            class="categoryList"
            v-for="(categoryItems, categoryName) in categorizedItems"
            :key="categoryName">
            <div class="categoryNameDiv">{{ categoryName }}</div>
            <div
              class="listItem"
              v-for="(item, index) in categoryItems"
              :key="index">
              <a :href="item.url" target="_blank" rel="noopener noreferrer">
                <div class="item-title">{{ item.title }}</div>
              </a>
            </div>
            <div class="listItem">
              <div class="TrendsText" v-html="backendData"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ButtonArea">
      <router-link to="/SubscriberCheck">
        <BlueButton @click="resetStore()" ButtonText="전송" />
      </router-link>
    </div>
  </div>
</template>

<script>
import ProcedureBox from "@/components/ProcedureBox.vue";
import BlueButton from "@/components/BlueButton.vue";

export default {
  components: { ProcedureBox, BlueButton },
  data() {
    return {
      backendData: "동향분석 내용",
      cartItems: [],
      categories: [
        { id: "1", name: "산업정책" },
        { id: "2", name: "건설정책" },
        { id: "3", name: "조선정책" },
        { id: "4", name: "IT 정책" },
      ],
      selectedCategory: "1", // Set the default selected category
    };
  },

  created() {
    this.cartItems = this.$store.state.cartItems.map((item) => ({
      ...item,
      checked: false,
    }));
  },

  computed: {
    categorizedItems() {
      const categorizedItems = {};

      // Iterate through the cartItems and categorize them
      this.cartItems.forEach((item) => {
        const categoryName = this.getCategoryName(item.category_id);

        if (!categorizedItems[categoryName]) {
          categorizedItems[categoryName] = [];
        }

        categorizedItems[categoryName].push(item);
      });

      return categorizedItems;
    },
  },

  methods: {
    getCategoryName(category) {
      const categoryMap = {
        1: "산업정책",
        2: "건설정책",
        3: "조선정책",
        4: "IT 정책",
      };
      return categoryMap[category] || "다른 카테고리";
    },
    selectCategory(categoryId) {
      this.selectedCategory = categoryId;
    },
    showCategorizedItems() {
      console.log(this.categorizedItems);
      this.$data.backendData =
        "Updated backend data after processing categorized items.";
    },
    resetStore() {
      this.$store.dispatch("resetCartItems");
    },
  },
};
</script>

<style scoped>
#musmaspickImg {
  width: 50%;
  text-align: center;
  display: block;
  margin: 30px auto;
}
.categoryList {
  margin: 30px 0px;
  width: 50%;
  margin: auto;
}
.categoryNameDiv {
  font-weight: bold;
  font-size: 1.25em;
  color: #0096e7;
  background-color: rgb(240, 240, 240);
  height: 2vh;
  margin: 10px;
  padding: 10px;
  line-height: 2vh;
}
.listItem {
  margin: 5px;
  padding: 5px;
}
.TrendsText {
  border: 3px solid #0096e7;
  padding: 10px;
}
.ButtonArea {
  margin: 0px 50px;
  padding: 30px 0px;
  display: flex;
  justify-content: right;
}
.procedure {
  display: flex;
  margin: 30px;
  border: 2px solid#000;
  height: 50px;
  width: 200px;
  font-style: bold;
  justify-content: center;
  align-items: center;
}
.contentsBox {
  margin: 0px 50px;
  padding: 30px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}
</style>

<template>
  <div>
    <div class="dropdownBox">
      <div class="text1Div">
        <span class="text1">담은 뉴스 목록</span>
      </div>

      <div>
        <div v-if="cartItems.length === 0">
          <div class="dropdownTitle">empty</div>
          <div class="emptyButtonArea">
            <router-link to="/NewsPage">
              <BlueButton ButtonText="뉴스 담기" />
            </router-link>
          </div>
        </div>

        <div v-else>
          <div
            class="dropdown"
            v-for="(categoryItems, categoryName) in categorizedItems"
            :key="categoryName">
            <div class="toggle" @click="toggleDropdown(categoryName)">
              {{ isOpen[categoryName] ? "△" : "▽" }}
              {{ categoryName }}
            </div>

            <div class="list" v-if="isOpen[categoryName]">
              <div
                class="list-item"
                v-for="(item, index) in categoryItems"
                :key="index">
                <div class="item-title">제목: {{ item.title }}</div>
                <div class="item-link">링크: {{ item.link }}</div>
                <button
                  class="deletebtn"
                  :id="'item' + index + itemIndex"
                  @click="newsDel(item, index)">
                  x
                </button>
              </div>
            </div>
          </div>
          <div class="ButtonArea">
            <router-link to="/ResultPage">
              <BlueButton
                ButtonText="동향 보기"
                @click="showCategorizedItems" />
            </router-link>
            <!-- @click="
            () => {
              for (let i in this.categorizedItems) {
                console.log(i, this.categorizedItems[i]);
              }
            }
          " -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlueButton from "../components/BlueButton.vue";

export default {
  name: "BasketPage",

  components: { BlueButton },

  data() {
    return {
      isOpen: {},
      cartItems: [],
    };
  },
  created() {
    this.$store.state.cartItems.forEach((item) => {
      this.cartItems.push({ ...item, checked: false });
      this.isOpen[item.category] = true;
    });
  },

  computed: {
    categorizedItems() {
      const categories = {};
      this.cartItems.forEach((item) => {
        const categoryName = this.getCategoryName(item.category);
        if (!categories[categoryName]) {
          categories[categoryName] = [];
        }
        categories[categoryName].push(item);
      });
      return categories;
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

    toggleDropdown(categoryName) {
      this.isOpen[categoryName] = !this.isOpen[categoryName];
    },
    newsDel(index) {
      console.log(index);

      this.$store.commit("deleteNewsItem", index);
      location.reload();
    },
    showCategorizedItems() {
      // Iterate through categorizedItems and log the data
      for (let category in this.categorizedItems) {
        console.log(category, this.categorizedItems[category]);
      }
      // Add logic to update the result page data
      // For example, you can make an API call here and update backendData
      this.$data.backendData =
        "Updated backend data after processing categorized items.";
    },
  },
};
</script>

<style scoped>
.text1Div {
  display: flex;
  justify-content: center;
  padding: 10px 0px;
}
.text1 {
  color: #000;
  text-align: center;
  font-size: 1.25em;
  font-weight: 700;
}
.emptyButtonArea {
  margin: 30px 50px;
  font-size: 0.75em;
  display: flex;
  justify-content: center;
  white-space: nowrap;
}
.ButtonArea {
  margin: 30px 50px;
  display: flex;
  font-size: 0.75em;
  justify-content: right;
  white-space: nowrap;
}

.deletebtn {
  cursor: pointer;
  font-size: 1.2em;
  border: none;
  color: #0096e7;
  background-color: #fff;
  width: 50px;
  height: 50px;
  margin-left: auto;
  text-align: center;
}

input[type="checkbox"] {
  min-width: 1.25rem;
  min-height: 1.25rem;
}
input[type="checkbox"]:checked {
  width: 1.25rem;
  height: 1.25rem;
}
.dropdownTitle {
  padding: 2em;
  text-align: center;
}
.dropdownBox {
  font-size: 1.5em;
  margin: 50px 30px;
}
.dropdown {
  padding: 10px 0px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 100%;
}

.toggle {
  font-style: bold;
  padding: 10px;
  color: #0096e7;
  border-bottom: 1px solid #0096e7;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid #aaa;
  border-top: 0;
  max-height: 200px;
  overflow-y: auto;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #aaa;
}

input[type="checkbox"] {
  margin: 20px 10px;
}
.item-title {
  font-style: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px;
}

.item-link {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 10px;
}
</style>

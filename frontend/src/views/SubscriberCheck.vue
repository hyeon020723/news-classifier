<template>
  <div>
    <ProcedureBox />

    <div class="List">
      <table>
        <tr>
          <th><input type="checkbox" /></th>
          <th>이메일 주소</th>
          <th>구독일</th>
          <th>기타</th>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td>example@email.com</td>
          <td>2023-11-07</td>
          <td>기타 정보</td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td>example@email.com</td>
          <td>2023-11-07</td>
          <td>기타 정보</td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td>example@email.com</td>
          <td>2023-11-07</td>
          <td>기타 정보</td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td>example@email.com</td>
          <td>2023-11-07</td>
          <td>기타 정보</td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td>example@email.com</td>
          <td>2023-11-07</td>
          <td>기타 정보</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import ProcedureBox from "@/components/ProcedureBox.vue";

export default { components: { ProcedureBox } };
</script>

<style scoped>
.List {
  margin: 0px 50px;
  background-color: #e2e2e2;
}
.List > table {
  padding: 10px;

  width: 100%;
  text-align: left;
}
td,
th {
  padding: 10px;
}
</style>

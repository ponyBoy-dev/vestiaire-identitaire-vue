<template>
  <div id="header" class="margin-bottom">
    <div class="flex-center colorful margin radius box-shadow">
      <h1>Vestiaire Identitaire</h1>
    </div>
    <h4 class="margin">Relooking par le langage</h4>
  </div>
</template>

<style scoped>
h1 {
  line-height: 0.7;
  margin-top: 26.8px;
}
h4{
    text-align: right;
}
.flex-center {
  height: 5em;
  display: flex;
  justify-content: center;
}
.margin {
  margin-left: 2em;
  margin-right: 2em;
}
.margin-bottom{
    margin-bottom: 2em;
}
.radius {
  border-radius: 0.5em;
}
.box-shadow {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.colorful {
  background: -webkit-linear-gradient(70deg, #fff810 30%, rgba(0, 0, 0, 0) 30%),
    -webkit-linear-gradient(30deg, #63e89e 50%, rgba(0, 0, 0, 0) 30%),
    -webkit-linear-gradient(-40deg, #22b0e7 20%, #f03405 20%);
  background: -o-linear-gradient(70deg, #fff810 30%, rgba(0, 0, 0, 0) 30%),
    -o-linear-gradient(30deg, #63e89e 50%, rgba(0, 0, 0, 0) 30%),
    -o-linear-gradient(-40deg, #22b0e7 20%, #f03405 20%);
  background: -moz-linear-gradient(70deg, #fff810 30%, rgba(0, 0, 0, 0) 30%),
    -moz-linear-gradient(30deg, #63e89e 50%, rgba(0, 0, 0, 0) 30%),
    -moz-linear-gradient(-40deg, #22b0e7 20%, #f03405 20%);
  background: linear-gradient(70deg, #fff810 30%, rgba(0, 0, 0, 0) 30%),
    linear-gradient(30deg, #63e89e 50%, rgba(0, 0, 0, 0) 30%),
    linear-gradient(-40deg, #22b0e7 20%, #f03405 20%);
}
</style>
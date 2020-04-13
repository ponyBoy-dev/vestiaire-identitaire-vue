<template>
<div id="footer" class="margin-top flex-column-end">
    <div class="colorful">
        <h6>Développé par ponyBoy.
        <br/>Avec la fabuleuse collaboration de Sam pour les histoires.
    </h6>
    </div>
    
</div>
    
</template>

<style scoped>
#footer{
    
    width:100%;
}
h6{
    padding-top: 0.5em;
}
.colorful{
    background: linear-gradient(45deg, #fff810 30%, rgba(0, 0, 0, 0) 30%),
    linear-gradient(-50deg, #63e89e 30%, rgba(0, 0, 0, 0) 30%),
    linear-gradient(16deg, #22b0e7 50%, #f03405 20%)
}
.flex-column-end{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.margin-top{
    margin-top: 2em;
}
</style>


<template>
    <div id="app">
        <MenuBar :api-url="this.apiUrl"></MenuBar>
        <router-view :api-url="this.apiUrl"/>
    </div>
</template>
<template>
    <div id="app">
        <Sidebar :api-url="this.apiUrl"></Sidebar>
        <router-view :api-url="this.apiUrl"/>
    </div>
</template>
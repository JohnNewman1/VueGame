new Vue({
    el: '#app',
    data: {
        start: false,
        myHealth: 100,
        monsterHealth: 100
    },
    methods: {
        attack() {
            this.monsterHealth -= Math.random()*20;
            if(this.monsterHealth <= 0) {this.monsterHealth = 0}
            this.monsterAttack();
        },
        monsterAttack() {
            this.myHealth -= Math.random()*20;
            if(this.myHealth <= 0) {this.myHealth = 0}
        },
        heal() {
            this.myHealth += Math.random()*20 + 5;
            if(this.myHealth >= 100) {this.myHealth = 100}
            this.monsterAttack();

        }
    }
})

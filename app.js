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
        },
        specialAttack() {
            var chance = Math.floor(Math.random() * 2);
            if(chance != 0) { this.monsterHealth -= Math.random()*40; }
            if(this.myHealth <= 0) {this.myHealth = 0}
            this.monsterAttack();
        },
        reset() {
            Object.assign(this.$data, this.defaultData());
        },
        defaultData() {
            return {
                start: false,
                myHealth: 100,
                monsterHealth: 100
            }
        }
    },
    watch: {
        monsterHealth() {
            if (this.monsterHealth == 0) {
                alert('You win');
                this.reset();
            }
        },

        myHealth() {
            if (this.myHealth == 0) {
                alert('You Lose');
                this.reset();
            }
        }
    }
})

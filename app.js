new Vue({
    el: '#app',
    data: {
        playerHP: 100,
        opforHP: 100,
        newGame: false
    },
    methods: {
        startGame: function() {
            this.newGame = true;
        },
        attack: function() {
            var dmg = Math.ceil(Math.random() * 15);
            this.opforHP -= dmg;
            this.autoAttack();
        },
        finisherAttack: function() {
            var dmg = Math.ceil(Math.random() * 20 );
            this.opforHP -= dmg;
            this.autoAttack();
        },
        firstAid: function() {
            var dmg = Math.ceil(Math.random() * 30 );
            this.playerHP += dmg;
            this.autoAttack();
        },
        surrender: function() {
            
        },
        autoAttack: function() {
            var dmg = Math.ceil(Math.random() * 15);
            this.playerHP -= dmg;
        }
    }
})
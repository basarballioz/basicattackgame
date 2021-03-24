new Vue({
    el: '#app',
    data: {
        playerHP: 100,
        opforHP: 100,
        newGame: false,
        matchLog: []
    },
    methods: {
        startGame: function() {
            this.newGame = true;
        },
        attack: function() {
            var dmg = Math.ceil(Math.random() * 15);
            this.opforHP -= dmg;
            this.enableLogging({ turn: "Ally", text: "Ally Attacked  (" + dmg + ")"})
            this.autoAttack();
        },
        finisherAttack: function() {
            var dmg = Math.ceil(Math.random() * 20);
            this.opforHP -= dmg;
            this.enableLogging({ turn: "Ally", text: "Ally atağı (" + dmg + ")"})
            this.finisherAutoAttack();
        },
        firstAid: function() {
            var healPlayer = Math.ceil(Math.random() * 20);
            var healopFor = Math.ceil(Math.random() * 5);
            this.playerHP += healPlayer;
            this.opforHP += healopFor;
            this.attackFirstAid();
            this.enableLogging({ turn: "Ally", text: "Healed: (" + healPlayer + ")"})
            this.enableLogging({ turn: "Enemy", text: "Healed: (" + healopFor + ")"})
        },
        surrender: function() {
            this.playerHP = 0;
        },
        autoAttack: function() {
            var dmg = Math.ceil(Math.random() * 10);
            this.playerHP -= dmg;
            this.enableLogging({ turn: "Enemy", text: "Enemy attacked: (" + dmg + ")"})
        },
        attackFirstAid: function() {
            var dmg = Math.ceil(Math.random() * 10);
            this.playerHP -= dmg;
            this.enableLogging({ turn: "Enemy", text: "Enemy attacked while healing: (" + dmg + ")"})
        },
        finisherAutoAttack: function() {
            var dmg = Math.ceil(Math.random() * 30);
            this.playerHP -= dmg;
            this.enableLogging({ turn: "Enemy", text: "Enemy attacked: (" + dmg + ")"})
        },
        enableLogging: function(log) {
            this.matchLog.push(log);
        }
    },
    watch: {
        playerHP: function(hp) {
            if (hp <= 0) {
                this.playerHP = 0;
                if (confirm("Oyunu kaybettin tekrar oynamak ister misin")) {
                    this.playerHP = 100;
                    this.opforHP = 100;
                }
            }
            else if (hp >= 100) {
                this.playerHP = 100;
            }
        },
        opforHP: function(hp) {
            if (hp <= 0) {
                this.opforHP = 0;
                if (confirm("Oyunu kazandın tekrar oynamak ister misin")) {
                    this.playerHP = 100;
                    this.opforHP = 100;
                }
            }
            else if (hp >= 100) {
                this.opforHP = 100;
            }
        }

    }
    
})
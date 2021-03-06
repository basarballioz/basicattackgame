new Vue({
    el: '#app',
    data: {
        playerHP: 100,
        opforHP: 100,
        newGame: false,
        allyAlive: true,
        enemyAlive: true,
        matchLog: []
    },
    methods: {
        startGame: function () {
            this.newGame = true;
        },
        attack: function () {
            var dmg = Math.ceil(Math.random() * 15);
            this.opforHP -= dmg;
            this.enableLogging({ turn: "Ally", text: "Ally Attacked: " +  dmg  + " Damage" })
            this.autoAttack();
        },
        finisherAttack: function () {
            var dmg = Math.ceil(Math.random() * 20);
            this.opforHP -= dmg;
            this.enableLogging({ turn: "Ally", text: "Ally Attacked: " + dmg + " Damage" })
            this.finisherAutoAttack();
        },
        firstAid: function () {
            var healPlayer = Math.ceil(Math.random() * 20);
            var healopFor = Math.ceil(Math.random() * 5);
            this.playerHP += healPlayer;
            this.opforHP += healopFor;
            this.attackFirstAid();
            this.enableLogging({ turn: "Ally", text: "Ally Healed: " + healPlayer + " HP" })
            this.enableLogging({ turn: "Enemy", text: "Enemy Healed: " + healopFor + " HP" })
        },
        surrender: function () {
            this.playerHP = 0;
        },
        autoAttack: function () {
            var dmg = Math.ceil(Math.random() * 10);
            this.playerHP -= dmg;
            this.enableLogging({ turn: "Enemy", text: "Enemy attacked: " + dmg + " Damage" })
        },
        attackFirstAid: function () {
            var dmg = Math.ceil(Math.random() * 10);
            this.playerHP -= dmg;
            this.enableLogging({ turn: "Enemy", text: "Enemy attacked while healing: " + dmg + " Damage" })
        },
        finisherAutoAttack: function () {
            var dmg = Math.ceil(Math.random() * 30);
            this.playerHP -= dmg;
            this.enableLogging({ turn: "Enemy", text: "Enemy attacked: " + dmg + " Damage" })
        },
        enableLogging: function (log) {
            this.matchLog.push(log)
        }
    },
    watch: {
        playerHP: function (hp) {
            if (hp <= 0) {
                this.playerHP = 0
                this.allyAlive = false;
                if (confirm("Game is over. Winner: Lion. Wanna play again ?")) {
                    this.playerHP = 100;
                    this.opforHP = 100;
                    this.matchLog = [];
                    this.allyAlive = true;
                    this.enemyAlive = true;
                }
            }
            else if (hp >= 100) {
                this.playerHP = 100;
            }
        },
        opforHP: function (hp) {
            if (hp <= 0) {
                this.opforHP = 0;
                this.enemyAlive = false;
                if (confirm("Game is over. Winner: Chick. Wanna play again ?")) {
                    this.playerHP = 100;
                    this.opforHP = 100;
                    this.matchLog = [];
                    this.allyAlive = true;
                    this.enemyAlive = true;
                }
            }
            else if (hp >= 100) {
                this.opforHP = 100;
            }
        }

    }

})
'reach 0.1';

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        payment: UInt,
        seefotune: Fun([UInt], Bool)
    })
    const Bob = Participant('Bob', {
        readfortune: Fun([], UInt),
    })

    init()
    Alice.only(() => {
        const payments = declassify(interact.payment)
    })
    Alice.publish(payments)
        .pay(payments)
    commit()
    Bob.publish()
    var alice_decision = false
    invariant(balance() == payments)
    while (alice_decision == false) {
        commit()
        Bob.only(() => {
            const fortune = declassify(interact.readfortune())
        })
        Bob.publish(fortune)
        commit()
        Alice.only(() => {
            const Seefortune = declassify(interact.seefotune(fortune))
        })
        Alice.publish(Seefortune)
        alice_decision = Seefortune
        continue
    }
    transfer(payments).to(alice_decision == true ? Bob : Alice)
    commit()
});
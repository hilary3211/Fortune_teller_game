from os import name
from threading import Thread
from reach_rpc import mk_rpc
import time
#import psycopg2



Name = ['Hilary','james']
phrase = ['banana grow milk mercy record runway kitchen ability despair shine fringe dolphin describe sheriff indicate rubber push hurt smoke hour peace market palace about exhibit','sick guess crime sketch carry undo shallow used erase tilt business brush early mercy vague arrest brown approve vehicle voyage mobile stable begin abstract cabbage']
funds = [3]
Fortuneanddecision = ['yes','You will be rich']


def main():
    if Name == funds:
        print('Dataset empty')
    else:
        rpc, rpc_callbacks = mk_rpc()
        rpc("/stdlib/setProviderByName", "TestNet")

        #starting_balance = rpc("/stdlib/parseCurrency", 6000)
        names = [Name[0], Name[1]]
        p1acc_mnemonic = phrase[0]
        p2acc_mnemonic = phrase[1]

        # acc_alice = rpc("/stdlib/newTestAccount", starting_balance)
        # acc_bob = rpc("/stdlib/newTestAccount", rpc("/stdlib/parseCurrency", 500))
        acc_alice = rpc("/stdlib/newAccountFromMnemonic", p1acc_mnemonic)
        acc_bob = rpc("/stdlib/newAccountFromMnemonic", p2acc_mnemonic)

        def fmt(x):
            return rpc("/stdlib/formatCurrency", x, 4)

        def get_balance(w):
            return fmt(rpc("/stdlib/balanceOf", w))

        before_alice = get_balance(acc_alice)
        before_bob = get_balance(acc_bob)

        print("%s starting balance is %s algo" % (names[0], before_alice))
        print("%s starting balance is %s algo" % (names[1], before_bob))

        ctc_alice = rpc("/acc/contract", acc_alice)

        def play_alice():
            pay = int(funds[0])

            def seefortune(f):
                print("Alice saw the fortune ")
                choice = Fortuneanddecision[0]
                if choice == "yes" or choice == "y" or choice == "Yes":
                    return True
                else:
                    return False

            rpc_callbacks(
                "/backend/Alice",
                ctc_alice,
                dict(payment=rpc("/stdlib/parseCurrency", pay), seefotune=seefortune),
            )

        alice = Thread(target=play_alice)
        alice.start()

        def play_bob():
            def readfortune():
                fort = Fortuneanddecision[1]
                print("The fortune is %s" % fort)
                return 1

            ctc_bob = rpc("/acc/contract", acc_bob, rpc("/ctc/getInfo", ctc_alice))
            rpc_callbacks(
                "/backend/Bob",
                ctc_bob,
                dict(readfortune=readfortune),
            )
            rpc("/forget/ctc", ctc_bob)

        bob = Thread(target=play_bob)
        bob.start()

        alice.join()
        bob.join()

        after_alice = get_balance(acc_alice)
        after_bob = get_balance(acc_bob)

        print("%s starting balance is %s algo" % (names[0], after_alice))
        print("%s starting balance is %s algo" % (names[1], after_bob))
        rpc("/forget/acc", acc_alice, acc_bob)
        rpc("/forget/ctc", ctc_alice)


if __name__ == "__main__":
    main()
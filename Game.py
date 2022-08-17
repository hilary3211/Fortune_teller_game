import threading
from tkinter import *
from turtle import bgcolor
from PIL import Image, ImageTk
from threading import Thread
from reach_rpc import mk_rpc
import time
Deployer_list = []
Attacher_list = []
Names = []
Bal_before = []
Bal_after = []


def main():
    colour = "black"
    colour2 = "white"
    root = Tk()
    root.title("Fortune")
    root.configure(background=colour)

    def Deployer():
        def nexttab():
            Deployer_list.append(funds.get())
            top.destroy()
            newtop = Toplevel()
            newtop.configure(background=colour)

            def enter_dec():
                if len(Deployer_list) < 4:
                    Deployer_list.append(Decision.get())
                else:
                    Deployer_list[3] = Decision.get()

                if (
                    Deployer_list[3] == "Yes"
                    or Deployer_list[3] == "y"
                    or Deployer_list[3] == "yes"
                ):
                    print(Deployer_list)
                    print(Attacher_list)
                    newtop.destroy()
                    top2 = Toplevel()
                    top2.configure(background=colour)
                    rpc, rpc_callbacks = mk_rpc()
                    rpc("/stdlib/setProviderByName", "TestNet")

                    #starting_balance = rpc("/stdlib/parseCurrency", 6000)
                    names = [Deployer_list[0], Attacher_list[0]]
                    p1acc_mnemonic = Deployer_list[1]
                    p2acc_mnemonic = Attacher_list[1]

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
                        pay = int(Deployer_list[2])

                        def seefortune(f):
                            print("Alice saw the fortune ")
                            choice = Deployer_list[3]
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
                            fort = Attacher_list[2]
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
                    Bal_before.append(before_alice)
                    Bal_before.append(before_bob)
                    Bal_after.append(after_alice)
                    Bal_after.append(after_bob)

                    print("%s starting balance is %s algo" % (names[0], after_alice))
                    print("%s starting balance is %s algo" % (names[1], after_bob))


                    rpc("/forget/acc", acc_alice, acc_bob)
                    rpc("/forget/ctc", ctc_alice)
                    

                    def see_bal():
                        Textbox1.insert(
                            END, "\nDeployer Starting Balance: %s Algo" % Bal_before[0]
                        )
                        Textbox1.insert(
                            END, "\nDeployer Ending Balance: %s Algo" % Bal_after[0]
                        )

                    def stop():
                        top2.destroy()

                    lab = Label(
                        top2,
                        text="You liked the fortune!!!!!!\nClick on the check balance button to view your remaining balance\nWhen done click on the exit button to exit game",
                        width=50,
                        height=5,
                        font=50,
                        bg=colour,
                        fg=colour2,
                    ).pack()
                    Textbox1 = Text(
                        top2,
                        height=10,
                        width=30,
                        bg=colour,
                        fg=colour2,
                    )
                    Textbox1.pack(expand=True)
                    btn = Button(top2, text="CheckBalance", command=see_bal).pack()
                    btn2 = Button(top2, text="exit", command=stop).pack()


            newtop.title("DEPLOYER")
            lab = Label(
                newtop,
                text="Hello Deployer!!\nClick the button below to view fortune\n In the entry box below enter decision and press enter",
                width=50,
                height=5,
                font=50,
                bg=colour,
                fg=colour2,
            ).pack()
            Textbox1 = Text(
                newtop,
                height=10,
                width=30,
                bg=colour,
                fg=colour2,
            )
            Textbox1.pack(expand=True)

            def see():
                if len(Attacher_list) == 2:
                    Textbox1.insert(END, "\nwaiting.......")
                else:
                    Textbox1.insert(END, "\n%s" % Attacher_list[2])

            btn = Button(newtop, text="checking", command=see).pack()
            Decision = StringVar()
            Decision_entry = Entry(newtop, textvariable=Decision, width=20)  # .pack()
            Decision_entry.pack(expand=True)
            d_btn = Button(newtop, text="Enter", command=threading.Thread(target=enter_dec).start()).pack()

        top = Toplevel()
        top.configure(background=colour)
        top.title("DEPLOYER")

        def nameg():
            if len(Deployer_list) < 1:
                Deployer_list.append(name.get())
            else:
                Deployer_list[0] = name.get()

        def mnemonicg():
            if len(Deployer_list) < 2:
                Deployer_list.append(mnemonic_phrase.get())
            else:
                Deployer_list[1] = mnemonic_phrase.get()

        my_label = Label(
            top,
            font=50,
            text="Welcome Deployer!",
            width=50,
            height=12,
            bg=colour,
            fg=colour2,
        ).pack()
        Name = Label(top, font=50, text="Enter Name", bg=colour, fg=colour2).pack()
        name = StringVar()
        enter_name = Entry(top, textvariable=name, width=20).pack()
        name_btn = Button(top, text="Enter", command=nameg).pack()
        mnemonic = Label(
            top, font=50, text="Enter mnemonic phrase", bg=colour, fg=colour2
        ).pack()
        mnemonic_phrase = StringVar()
        enter_mnemonic = Entry(top, textvariable=mnemonic_phrase, width=30).pack()
        mnemonic_btn = Button(top, text="Enter", command=mnemonicg).pack()
        funds_label = Label(
            top, font=50, text="Enter funds to deploy contract", bg=colour, fg=colour2
        ).pack()
        funds = StringVar()
        funds_entry = Entry(top, font=50, textvariable=funds).pack()
        Deploy = Button(top, text="Deploy", command=nexttab).pack()

    def Attacher():
        def nexttab():
            Attacher_list.append(Amnemonic_phrase.get())
            top.destroy()
            newtop = Toplevel()
            newtop.configure(background=colour)

            def get_fortune():
                Textbox1.insert(END, "\n Entered fortune: %s" % fortune.get())
                if len(Attacher_list) < 4:
                    Attacher_list.append(fortune.get())
                else:
                    Attacher_list[3] = fortune.get()

            newtop.title("ATTACHER")
            lab = Label(
                newtop,
                text="Hello Attacher!!\nInput deployer fortune below and click enter\nClick the button below the textbox to see Deployer response",
                width=50,
                height=5,
                font=50,
                bg=colour,
                fg=colour2,
            ).pack()
            fortune = StringVar()
            fortune_entery = Entry(newtop, textvariable=fortune, width=20).pack()
            btn = Button(newtop, text="enter", command=get_fortune).pack()
            Textbox1 = Text(
                newtop,
                height=10,
                width=30,
                bg=colour,
                fg=colour2,
            )
            Textbox1.pack(expand=True)

            def see():
                if len(Deployer_list) == 3:
                    Textbox1.insert(END, "\nwaiting.......")
                else:
                    Textbox1.insert(END, "\n%s" % Deployer_list[3])
                if (
                    Deployer_list[3] == "Yes"
                    or Deployer_list[3] == "y"
                    or Deployer_list[3] == "yes"
                ):
                    newtop.destroy()
                    top2 = Toplevel()
                    top2.configure(background=colour)

                    def see_bal():
                        Textbox2.insert(
                            END, "\nAttacher Starting Balance: %s Algo" % Bal_before[1]
                        )
                        Textbox2.insert(
                            END, "\nAttacher Ending Balance: %s Algo" % Bal_after[1]
                        )

                    def stop():
                        top2.destroy()

                    lab = Label(
                        top2,
                        text="Deployer liked the fortune!!!!\nClick on the check balance button to view your remaining balance\nWhen done click on the exit button to exit game",
                        width=50,
                        height=5,
                        font=50,
                        bg=colour,
                        fg=colour2,
                    ).pack()
                    Textbox2 = Text(
                        top2,
                        height=10,
                        width=30,
                        bg=colour,
                        fg=colour2,
                    )
                    Textbox2.pack(expand=True)
                    btn = Button(top2, text="CheckBalance", command=see_bal).pack()
                    btn2 = Button(top2, text="exit", command=stop).pack()

            btn2 = Button(newtop, text="Check reply", command=see).pack()

        top = Toplevel()
        top.configure(background=colour)
        top.title("Attacher")

        def nameg():
            if len(Attacher_list) < 1:
                Attacher_list.append(Aname.get())
            else:
                Attacher_list[0] = Aname.get()

        my_label = Label(
            top,
            font=50,
            width=50,
            height=12,
            text="Welcome ATTACHER!",
            bg=colour,
            fg=colour2,
        ).pack()
        AName = Label(top, font=50, text="Enter Name", bg=colour, fg=colour2).pack()
        Aname = StringVar()
        Aenter_name = Entry(top, textvariable=Aname, width=20).pack()
        Aname_btn = Button(top, text="Enter", command=nameg).pack()
        Amnemonic = Label(
            top, font=50, text="Enter mnemonic phrase", bg=colour, fg=colour2
        ).pack()
        Amnemonic_phrase = StringVar()
        enter_mnemonic = Entry(top, textvariable=Amnemonic_phrase, width=30).pack()
        Attach = Button(top, text="Attach", command=nexttab).pack()

    Game_name = Label(
        root, text="Fortune teller game", font=1000, bg=colour, fg=colour2
    ).pack()

    Intro_img = ImageTk.PhotoImage(Image.open("02.png"))
    img = Label(
        root,
        image=Intro_img,
        #text='Fortune tellers',
        bg="black",
        fg="white",
    ).pack()
    User_state = Label(
        root,
        text="Select player state Deployer /Attacher below",
        font=100,
        bg=colour,
        fg=colour2,
    ).pack()
    btn1 = Button(root, text="Deployer", font=50, command=Deployer).pack()
    btn2 = Button(root, text="Attacher", font=50, command=Attacher).pack()

    root.mainloop()


if __name__ == "__main__":
    main()
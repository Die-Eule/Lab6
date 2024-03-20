import { Button, Image, Input, Link } from "@nextui-org/react";
import {MailIcon} from '@/components/MailIcon/MailIcon';
import { UserIcon } from "@/components/UserIcon/UserIcon";
import { PswdIcon } from "@/components/PswdIcon/PswdIcon";
import { ROUTER } from "@/router/router.enum";

export default function Account() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-start">
        <div className="flex justify-start w-[100%]">
          <Image src={"/acc_pic.png"} alt="account picture" width={610} radius="none"></Image>
          <div className="px-[60px] py-[100px]">
            <p className="text-[51px] font-semibold mb-[20px]">Create account</p>
            <p className="text-[22px] font-normal leading-[160%] w-[460px] mb-[40px]">Welcome! enter your details and start creating, collecting and selling NFTs.</p>
            <form className="w-[330px]">
              <Input className="mb-[15px]"
                type="text"
                variant="flat"
                color="primary"
                radius="lg"
                placeholder="Username"
                startContent={
                  <UserIcon />
                }
              />
              <Input className="mb-[15px]"
                type="email"
                variant="flat"
                color="primary"
                radius="lg"
                placeholder="Email Address"
                startContent={
                  <MailIcon />
                }
              />
              <Input className="mb-[15px]"
                type="password"
                variant="flat"
                color="primary"
                radius="lg"
                placeholder="Password"
                startContent={
                  <PswdIcon />
                }
              />
              <Input className="mb-[30px]"
                type="password"
                variant="flat"
                color="primary"
                radius="lg"
                placeholder="Confirm Password"
                startContent={
                  <PswdIcon />
                }
              />
              <Button color="secondary" variant="solid" fullWidth="true">
                Create account
              </Button>
            </form>
          </div>
        </div>
        <div className="bg-content1 min-h-[264px] w-full flex justify-center pt-[40px] pb-[58px]">
          <div className="flex flex-col items-start justify-between min-w-[240px]">
            <p>Explore</p>
            <Link color="foreground" href={ROUTER.LOTS}>
              Marketplace
            </Link>
            <Link color="foreground" href={ROUTER.CREATORS}>
              Ranking
            </Link>
            <Link color="foreground" href={ROUTER.WALLETS}>
              Connect a wallet
            </Link>
          </div>
          <div className="flex flex-col items-start justify-between">
            <p>Join our weekly digest</p>
          </div>
        </div>
      </main>
    );
  }

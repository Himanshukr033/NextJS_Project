
import copy from "../../../../assets/copy.png";
import Image from "next/image";
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { EmailShareButton, FacebookShareButton, InstapaperShareButton, LinkedinShareButton, RedditShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';


function InviteFriendsSection() {

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [copiedText, setCopiedText] = useState('');

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const copyTextToClipboard = async (text:string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setSnackbarMessage('Text copied to clipboard!');
      setSnackbarOpen(true);
      console.log(text);
    } catch (err) {
      setSnackbarMessage('Failed to copy text.');
      setSnackbarOpen(true);
      console.error('Could not copy text: ', err);
    }
  };

  return (
    <section
      className="flex flex-col justify-center px-8 py-8 mt-7 backdrop-blur-lg rounded-[32px] max-md:px-5 max-md:max-w-full"
      style={{
        boxShadow:
          "  rgba(255, 255, 255, 0.15) 1.95px 1.95px 1px, rgba(255, 255, 255, 0.15) -1.95px -1.95px 1px,",

        background:
          "radial-gradient(114.61% 114.61% at 50% 0%, #242329 0%, #111016 100%)",
      }}
    >
      <h2 className="text-xl font-bold text-zinc-300 max-md:max-w-full">
        Invite your friends!
      </h2>
      <p className="mt-4 text-base text-zinc-500 max-md:max-w-full">
        Add your friends email addresses and send them invitations to join!
      </p>
      <form
        className="flex gap-5 justify-between py-1 pr-2 pl-2.5 mt-4 rounded-xl max-md:flex-wrap max-md:max-w-full"
        style={{
          maxHeight: "50px",
          boxShadow:
            " rgba(255, 255, 255, 0.25) 0px 2px 2px -1px, rgba(255, 255, 255, 0.3) 0px 1px 3px -1px",
          background:
            "linear-gradient(89.94deg, rgba(44, 43, 49, 0.6) 0.06%, rgba(34, 33, 39, 0.6) 99.97%)",
        }}
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email address"
          className="my-auto text-sm w-full text-zinc-500"
          aria-label="Email address"
          style={{
            outline: "none",
            caretColor: "white",
            background: "transparent",
          }}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{
            justifyContent: 'center',
            padding: '6px 24px', 
            fontSize: '1.25rem',
            fontWeight: '500', 
            color: 'white',
            whiteSpace: 'nowrap',
            borderRadius: '1.5rem', 
            backgroundColor: '#374151',
            '&:hover': {
              backgroundColor: '#4B5563', 
            },
            '@media (max-width: 767px)': {
              padding: '6px 20px', 
              maxHeight: '3rem',
            },
          }}>
          Send
        </Button>
      </form>
      <h3 className="mt-6 text-xl font-bold text-white max-md:max-w-full">
        Referral Link
      </h3>

      <form className="flex flex-col gap-5 justify-between rounded-xl max-md:flex-wrap max-md:max-w-full">
        <div
          className="flex gap-5 justify-between rounded-xl py-1 pr-2 pl-2.5 mt-4 max-md:flex-wrap max-md:max-w-full"
          style={{
            height: "50px",
            boxShadow:
              " rgba(255, 255, 255, 0.25) 0px 2px 2px -1px, rgba(255, 255, 255, 0.3) 0px 1px 3px -1px",
            background:
              "linear-gradient(89.94deg, rgba(44, 43, 49, 0.6) 0.06%, rgba(34, 33, 39, 0.6) 99.97%)",
          }}
        >
          <label htmlFor="email" className="sr-only">
            referral code
          </label>
          <input
            defaultValue=""
            readOnly
            type="text"
            id="referral"
            placeholder="Referral"
            
            className="my-auto text-sm text-zinc-500 w-full"
            aria-label="Referral code"
            style={{
              outline: "none",
              caretColor: "white",
              background: "transparent",
            }}
          />
          <IconButton onClick={() => copyTextToClipboard("copied text")}>
            <Image
              priority
              src={copy}
              alt=""
              className="shrink-0 w-8 aspect-square stroke-[1.333px] stroke-neutral-800"
            />
          </IconButton>
        </div>
        <div className="flex flex-col text-zinc-500 gap-2">
            <p className="pl-2">Share the code on:</p>
        
        <div className="flex justify-between text-xs ">
          <div className="flex flex-col gap-1">
            <EmailShareButton
              url={copiedText}
              subject="Check out this referral code"
            >
              <IconButton 
              sx={{
                color: "white",
                backgroundColor: "transparent",
                background:
                  "radial-gradient(circle, black, rgba(53, 52, 61, 0.7) 30%)",
                boxShadow: "inset 0 0 1px 2px rgba(53, 52, 61, 0.5)",

                "&:hover": {
                  transform: "scale(1.1)",
                  background:
                    "radial-gradient(circle, black, rgba(53, 52, 61, 0.9) 70%)",
                },
              }}>
                <EmailIcon />
              </IconButton>
            </EmailShareButton>
          </div>
          <div>
            <FacebookShareButton url={copiedText}>
              <IconButton sx={{
                color: "white",
                backgroundColor: "transparent",
                background:
                  "radial-gradient(circle, black, rgba(53, 52, 61, 0.7) 30%)",
                boxShadow: "inset 0 0 1px 2px rgba(53, 52, 61, 0.5)",

                "&:hover": {
                  transform: "scale(1.1)",
                  background:
                    "radial-gradient(circle, black, rgba(53, 52, 61, 0.9) 70%)",
                },
              }}>
                <FacebookIcon />
              </IconButton>
            </FacebookShareButton>
          </div>
          <div>
            <LinkedinShareButton url={copiedText}>
              <IconButton sx={{
                color: "white",
                backgroundColor: "transparent",
                background:
                  "radial-gradient(circle, black, rgba(53, 52, 61, 0.7) 30%)",
                boxShadow: "inset 0 0 1px 2px rgba(53, 52, 61, 0.5)",

                "&:hover": {
                  transform: "scale(1.1)",
                  background:
                    "radial-gradient(circle, black, rgba(53, 52, 61, 0.9) 70%)",
                },
              }}>
                <LinkedInIcon />
              </IconButton>
            </LinkedinShareButton>
          </div>
          <div>
            <RedditShareButton url={copiedText}>
              <IconButton sx={{
                color: "white",
                backgroundColor: "transparent",
                background:
                  "radial-gradient(circle, black, rgba(53, 52, 61, 0.7) 30%)",
                boxShadow: "inset 0 0 1px 2px rgba(53, 52, 61, 0.5)",

                "&:hover": {
                  transform: "scale(1.1)",
                  background:
                    "radial-gradient(circle, black, rgba(53, 52, 61, 0.9) 70%)",
                },
              }}>
                <RedditIcon />
              </IconButton>
            </RedditShareButton>
          </div>
          <div>
            <TelegramShareButton url={copiedText}>
              <IconButton sx={{
                color: "white",
                backgroundColor: "transparent",
                background:
                  "radial-gradient(circle, black, rgba(53, 52, 61, 0.7) 30%)",
                boxShadow: "inset 0 0 1px 2px rgba(53, 52, 61, 0.5)",

                "&:hover": {
                  transform: "scale(1.1)",
                  background:
                    "radial-gradient(circle, black, rgba(53, 52, 61, 0.9) 70%)",
                },
              }}>
                <TelegramIcon />
              </IconButton>
            </TelegramShareButton>
          </div>
          <div>
            <TwitterShareButton url={copiedText}>
              <IconButton sx={{
                color: "white",
                backgroundColor: "transparent",
                background:
                  "radial-gradient(circle, black, rgba(53, 52, 61, 0.7) 30%)",
                boxShadow: "inset 0 0 1px 2px rgba(53, 52, 61, 0.5)",

                "&:hover": {
                  transform: "scale(1.1)",
                  background:
                    "radial-gradient(circle, black, rgba(53, 52, 61, 0.9) 70%)",
                },
              }}> 
                <TwitterIcon />
              </IconButton>
            </TwitterShareButton>
          </div>
          <div>
            <WhatsappShareButton url={copiedText}>
              <IconButton sx={{
                color: "white",
                backgroundColor: "transparent",
                background:
                  "radial-gradient(circle, black, rgba(53, 52, 61, 0.7) 30%)",
                boxShadow: "inset 0 0 1px 2px rgba(53, 52, 61, 0.5)",

                "&:hover": {
                  transform: "scale(1.1)",
                  background:
                    "radial-gradient(circle, black, rgba(53, 52, 61, 0.9) 70%)",
                },
              }}>
                <WhatsAppIcon />
              </IconButton>
            </WhatsappShareButton>
          </div>
        </div>
        </div>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={1500}
          onClose={handleSnackbarClose}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={
              snackbarMessage === "Text copied to clipboard!"
                ? "success"
                : "error"
            }
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </form>

      <p className="mt-6 text-base leading-5 text-zinc-500 max-md:max-w-full">
        Earn 12% of the SOL used to compound from anyone who uses your referral
        link
      </p>
    </section>
  );
}

export default InviteFriendsSection;

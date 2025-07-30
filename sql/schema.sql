--
-- PostgreSQL database dump
--

-- Dumped from database version 16.9
-- Dumped by pg_dump version 16.9

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: enum_Borrowings_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_Borrowings_status" AS ENUM (
    'BORROWED',
    'RETURNED'
);


ALTER TYPE public."enum_Borrowings_status" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Books; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Books" (
    id uuid NOT NULL,
    title character varying(255) NOT NULL,
    author character varying(255) NOT NULL,
    published_year integer NOT NULL,
    stock integer DEFAULT 0 NOT NULL,
    isbn character varying(13) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public."Books" OWNER TO postgres;

--
-- Name: Borrowings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Borrowings" (
    id uuid NOT NULL,
    book_id uuid NOT NULL,
    member_id uuid NOT NULL,
    borrow_date timestamp with time zone NOT NULL,
    return_date timestamp with time zone,
    status public."enum_Borrowings_status" DEFAULT 'BORROWED'::public."enum_Borrowings_status",
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public."Borrowings" OWNER TO postgres;

--
-- Name: Members; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Members" (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    phone character varying(15) NOT NULL,
    address text NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public."Members" OWNER TO postgres;

--
-- Name: Books Books_isbn_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Books"
    ADD CONSTRAINT "Books_isbn_key" UNIQUE (isbn);


--
-- Name: Books Books_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Books"
    ADD CONSTRAINT "Books_pkey" PRIMARY KEY (id);


--
-- Name: Borrowings Borrowings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Borrowings"
    ADD CONSTRAINT "Borrowings_pkey" PRIMARY KEY (id);


--
-- Name: Members Members_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Members"
    ADD CONSTRAINT "Members_email_key" UNIQUE (email);


--
-- Name: Members Members_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Members"
    ADD CONSTRAINT "Members_pkey" PRIMARY KEY (id);


--
-- Name: Borrowings Borrowings_book_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Borrowings"
    ADD CONSTRAINT "Borrowings_book_id_fkey" FOREIGN KEY (book_id) REFERENCES public."Books"(id) ON UPDATE CASCADE;


--
-- Name: Borrowings Borrowings_member_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Borrowings"
    ADD CONSTRAINT "Borrowings_member_id_fkey" FOREIGN KEY (member_id) REFERENCES public."Members"(id) ON UPDATE CASCADE;


--
-- PostgreSQL database dump complete
--


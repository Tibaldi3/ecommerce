<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="vendite")
     */
    public function vendite() {

        return $this->render("vendite/vendite.html.twig");
    }
    /**
     * @Route("/prodotti", name="prodotti")
     */
    public function index() {
       return $this->render("products/products.html.twig");
    }
    /**
     * @Route("/carrello", name="carrello")
     */
    public function cart() {
        return $this->render("cart/cart.html.twig");
     }
}




package com.example.backend.api;

import com.example.backend.payment.RazorPay;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import org.apache.commons.lang3.ObjectUtils;
import org.apache.tomcat.util.json.JSONParser;
import org.apache.tomcat.util.json.ParseException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/payment")
@CrossOrigin(value = {"http://localhost:3000" , "http://localhost:3001"},allowCredentials = "true")
public class PaymentController {

    @GetMapping("/createOrder")
    public String createOrder() throws RazorpayException, ParseException {
        RazorpayClient razorpay=new RazorpayClient("rzp_test_23tqbC0XNDUYaJ","fjfzxmIQFWp9VyBtEt6d7PmI");
        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", 50000); // amount in the smallest currency unit
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", "order_rcptid_11");
        System.out.println("aa gaya");
        Order order = razorpay.Orders.create(orderRequest);
        System.out.println(order);
        System.out.println("mar gaya");
//        JSONParser parser = new JSONParser(order.toString());
//        JSONObject json = (JSONObject) parser.parse();

        return order.toString();
    }

}


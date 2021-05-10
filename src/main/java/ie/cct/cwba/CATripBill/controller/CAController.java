package ie.cct.cwba.CATripBill.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ie.cct.cwba.CATripBill.model.Item;
import ie.cct.cwba.CATripBill.util.JWTIssuer;
import io.jsonwebtoken.Claims;

@RestController
public class CAController {

	private Map<String, ArrayList<Item>> tripbill;

	public CAController() {
		tripbill = new HashMap<>();
	}

	@GetMapping("/login")
	public String login(@RequestParam(name = "username", required = true) String username,
			@RequestParam(name = "password", required = true) String password) {

		// TODO: We want an array of users.
		if ("david".contentEquals(username) && "s3cret".contentEquals(password)) {
			return JWTIssuer.createJWT(username, "ca-tripbill", username, 86400000);
		}

		// TODO: We want to return 401, when the username or password do not match.
		return "test";
	}

	@PostMapping("/{tripbill}/expense") // Authorization: Bearer <token>
	public Map<String, ArrayList<Item>> addExpense(@PathVariable("tripbill") String bill,
			@RequestHeader(name = "Authorization", required = true) String token,
			@RequestBody(required = true) Item item) {

		// TODO return 401 instead of 500.
		Claims claims = JWTIssuer.decodeJWT(token.split(" ")[1]);
		String subClaim = claims.get("sub", String.class);
		if (!"david".contentEquals(subClaim)) {
			throw new RuntimeException("Unknown user"); 
		}

		if(tripbill.get(bill) == null) {
			tripbill.put(bill, new ArrayList<Item>());
		}
		
		tripbill.get(bill).add(item);
		return tripbill;
	}

	@GetMapping("/{tripbill}")
	public String getTrip(@PathVariable("tripbill") String bill) {
		return "";
	}

	@PostMapping("/{tripbill}/close")
	public String closeTrip(@PathVariable("tripbill") String bill) {
		return "";
	}

	@GetMapping("/{tripbill}/summary")
	public String getSummary() {
		return "";
	}

}

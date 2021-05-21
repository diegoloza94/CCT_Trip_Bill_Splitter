package ie.cct.cwba.CCTTripBillSplitter.controller;

//Diego Lozano

import java.util.ArrayList;
//import java.util.List;
import java.util.HashMap;
import java.util.Map;


//import ie.cct.cwba.CCTTripBillSplitter.model.Journey;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ie.cct.cwba.CCTTripBillSplitter.model.Item;
import ie.cct.cwba.CCTTripBillSplitter.util.JWTIssuer;
import io.jsonwebtoken.Claims;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Controller {

	private Map<String, ArrayList<Item>> tripbillsplitter;

	
	public Controller() {
		tripbillsplitter = new HashMap<>();
	}
	
	@GetMapping("/Login")
	
	public String login(@RequestParam(name = "username", required = true) String username,
			@RequestParam(name = "password", required = true) String password) {

		// TODO: We want an array of users.
		if ("cctuser@gmail.com".contentEquals(username) && "school1".contentEquals(password)) {
			return JWTIssuer.createJWT(username, "ca-tripbillsplitter", username, 86400000);
		}
		if ("diego@gmail.com".contentEquals(username) && "school1".contentEquals(password)) {
			return JWTIssuer.createJWT(username, "ca-tripbillsplitter", username, 86400000);
		}
		if ("amilcar@gmail.com".contentEquals(username) && "school1".contentEquals(password)) {
			return JWTIssuer.createJWT(username, "ca-tripbillsplitter", username, 86400000);
		}
		if ("david@gmail.com".contentEquals(username) && "school1".contentEquals(password)) {
			return JWTIssuer.createJWT(username, "ca-tripbillsplitter", username, 86400000);
		}

		// TODO: We want to return 401, when the username or password do not match.
		return "The USER and/or PASSWORD do not match.";
	}

	@PostMapping("/{tripbillsplitter}/expense") // Authorization: Bearer <token>
	public Map<String, ArrayList<Item>> addExpense(@PathVariable("tripbillsplitter") String bill,
			@RequestHeader(name = "Authorization", required = true) String token,
			@RequestBody(required = true) Item item) {

		// TODO return 401 instead of 500.
		Claims claims = JWTIssuer.decodeJWT(token.split(" ")[1]);
		String subClaim = claims.get("sub", String.class);
		if (!"diego@gmail.com".contentEquals(subClaim) && !"amilcar@gmail.com".contentEquals(subClaim) && !"david@gmail.com".contentEquals(subClaim) && !"cctuser@gmail.com".contentEquals(subClaim)) {
			throw new RuntimeException("Unknown user"); 
		}

		if(tripbillsplitter.get(bill) == null) {
			tripbillsplitter.put(bill, new ArrayList<Item>());
		}
		
		tripbillsplitter.get(bill).add(item);
		return tripbillsplitter;
	}

	@GetMapping("/{tripbillsplitter}")
	public ArrayList<Item> getTrip(@PathVariable("tripbillsplitter") String bill) {
		//List<Item> Item = new ArrayList<>();
		//Optional <Journey> trip = tripbillsplitter.
		
		if (tripbillsplitter.get(bill) != null) {
		} else 
			throw new RuntimeException("Error");
		return tripbillsplitter.get(bill);
		
	} 

	@PostMapping("/{tripbillsplitter}/close")
	public String closeTrip(@PathVariable("tripbillsplitter") String bill) {
		
		return "";
	}

	@GetMapping("/{tripbillsplitter}/summary")
	public String getSummary(@PathVariable("tripbillsplitter") String tripbillsplitter, Item item,
			@RequestHeader(name = "Authorization", required = true) String token)	{
		
		// TODO return 401 instead of 500.
				Claims claims = JWTIssuer.decodeJWT(token.split(" ")[1]);
				String subClaim = claims.get("sub", String.class);
				
				item.setName(subClaim);
		return "";
	}

}

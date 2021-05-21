package ie.cct.cwba.CCTTripBillSplitter.model;

public class Item {
	
	private String name;
	private Integer price;
	private boolean status;
	
	public Item() {
		super();
	}
	
	public Item(String name, Integer price) {
		super();
		this.name = name;
		this.price = price;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}	

}
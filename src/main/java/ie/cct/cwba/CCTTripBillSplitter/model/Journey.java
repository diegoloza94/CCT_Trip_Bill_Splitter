package ie.cct.cwba.CCTTripBillSplitter.model;

import java.util.List;
import java.util.ArrayList;

public class Journey {
	private String label;
	private List<Item> items = new ArrayList<Item>();
	private boolean status;
	
	public Journey () {
		
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public List<Item> getItems() {
		return items;
	}

	public void setItems(List<Item> items) {
		this.items = items;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
}

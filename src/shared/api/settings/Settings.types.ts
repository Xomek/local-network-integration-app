export interface Settings {
    enabled: boolean;
    iface: string;
    local_address: string;
    local_port: number;
    mac_ttl: number;
    unicast: string;
    remote: any[];
  }